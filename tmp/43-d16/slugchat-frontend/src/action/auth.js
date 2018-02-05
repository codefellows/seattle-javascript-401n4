import superagent from 'superagent'
import * as util from '../lib/util.js'

export const login = (token) => ({
  type: 'LOGIN',
  payload: token,
})

export const logout = () => {
  util.cookieDelete('X-Slugchat-Token')
  return { type: 'LOGOUT' }
}

export const loginRequest = (user) => (dispatch) => {
  return superagent.get(`${__API_URL__}/login`)
  .withCredentials() // exchange cookeis
  .auth(user.username, user.password)
  .then(res => {
    let token = util.cookieFetch('X-Slugchat-Token')
    if(token)
      dispatch(login(token))
    return res
  })
  .catch(util.logError)
}

export const signupRequest = (user) => (dispatch) => {
  return superagent.post(`${__API_URL__}/signup`)
  .withCredentials() // exchange cookeis
  .send(user)
  .then(res => {
    let token = util.cookieFetch('X-Slugchat-Token')
    if(token)
      dispatch(login(token))
    return res
  })
  .catch(util.logError)
}

export const renderIf = (test, component) => test ? component : undefined

export const classToggler = (options) => 
  Object.keys(options).filter(key => !!options[key]).join(' ')

export const log = (...args) => 
  __DEBUG__ ? console.log(...args) : undefined

export const logError = (...args) => 
  __DEBUG__ ? console.error(...args) : undefined

export const cookieTime = (days) => {
  let result = new Date()
  let millisecondsPerDay = 86400000
  result.setTime(result.getTime() + (days * millisecondsPerDay))
  return result.toUTCString()
}

export const cookieCreate = (name, value, days) => {
  let expires = days ? ` ${cookieTime(days)};` : ''
  document.cookie = `${name}=${value};${expires} path='/'` 
}

export const cookieFetch = (key) => {
  let cookies = Object.assign(...document.cookie.split(';')
    .map(cookie => {
      let [key, value] = cookie.split('=')
      return {[key.trim()]: value}
     }))
  return cookies[key]
}

export const cookieDelete = (key) => {
  document.cookie = `${key}=; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
}

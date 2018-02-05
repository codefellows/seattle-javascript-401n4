export default (state='/landing', {type, payload}) => {
  switch(type){
    case 'LOGIN':
      return '/chat'
    case 'LOGOUT':
      return '/landing'
    case 'SWITCH_ROUTE':
      return payload
    default:
      return state
  }
}

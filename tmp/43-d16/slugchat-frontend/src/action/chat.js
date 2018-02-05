export const userConnected = (payload) => ({
  payload,
  type: 'USER_CONNECTED',
})

export const userDisconnected = (payload) => ({
  payload,
  type: 'USER_DISCONNECTED',
})

export const message = (payload) => ({
  payload,
  type: 'MESSAGE',
})

// all payloads
// {username: string, meta: bool, content: string}

export const connect = (payload)=> ({
    type: "USER_CONNECTED",
    payload: payload
});

export const disconnect = (payload)=> ({
    type: "USER_DISCONNECTED",
    payload: payload
});

export const message = (payload)=> ({
    type: "MESSAGE",
    payload: payload
});
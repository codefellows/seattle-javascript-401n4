import * as chatActions from "./actions";

const MESSAGE = (store) => (socket) => (payload) => {
    store.dispatch(chatActions.message(payload))
};

const USER_CONNECTED = (store) => (socket) => (payload) => {
    store.dispatch(chatActions.connect(payload))
};

const USER_DISCONNECTED = (store) => (socket) => (payload) => {
    store.dispatch(chatActions.disconnect(payload))
};

export default {MESSAGE, USER_CONNECTED, USER_DISCONNECTED};
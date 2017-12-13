import uuid from 'uuid/v1'

export const todoCreate = todo => {
  todo.id = uuid()
  todo.timestamp = new Date()
  return {
    type: 'CREATE',
    payload: todo
  }
};

export const todoUpdate = todo => ({
  type: 'UPDATE',
  payload: todo
});

export const todoDelete = todo => ({
  type: 'DELETE',
  payload: todo
});
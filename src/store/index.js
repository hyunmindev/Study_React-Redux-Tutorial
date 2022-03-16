import { createStore } from 'redux';

export default createStore((state = 0, { type, payload } = {}) => {
  switch (type) {
    case 'CHANGE':
      return state + payload;
    default:
      return state;
  }
});

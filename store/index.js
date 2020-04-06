import { createStore } from 'redux';
import { rootReducer, initialState } from './reducer';

export const reduxStore = () => {
  const store = createStore(
    rootReducer, 
    initialState
  );
  return store;
}
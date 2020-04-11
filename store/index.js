import { createStore } from 'redux';
import { rootReducer, initialState } from './reducer';

const reduxStore = () => {
  const store = createStore(
    rootReducer, 
    initialState
  );
  return store;
}

export default reduxStore;
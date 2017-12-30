import throttle from 'lodash/throttle';
import { createStore } from 'redux';

import { loadState, saveState } from './asyncStorage';
import reducer from './reducers';


const configureStore = () => {
  const persistedState = loadState();
  const store = createStore(reducer, persistedState);

  store.subscribe(throttle(() => {
    saveState(store.getState());
  }, 1000));

  return store;
};

export default configureStore;

import throttle from 'lodash/throttle';
import { createStore } from 'redux';

import { loadState, saveState } from './asyncStorage';
import reducer from './reducers';


const configureStore = () => {
  const persistedState = {
    decks: {
      allIds: ['1', '2'],
      byId: {
        '1': {
          id: '1',
          title: 'React',
          cards: ['1'],
        },
        '2': {
          id: '2',
          title: 'Udacity',
          cards: ['1', '2', '3'],
        },
      },
    },
  };
  const store = createStore(reducer, persistedState);

  store.subscribe(throttle(() => {
    saveState(store.getState());
  }, 1000));

  return store;
};

export default configureStore;

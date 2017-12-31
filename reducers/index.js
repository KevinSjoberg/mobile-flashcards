import { combineReducers } from 'redux';

import decks, * as fromDecks from './decks';

export default combineReducers({
  decks,
});

export const getDecks = state => fromDecks.getDecks(state.decks);

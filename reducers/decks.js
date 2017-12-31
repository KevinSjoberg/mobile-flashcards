import { combineReducers } from 'redux';

const allIds = (state = [], action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const byId = (state = {}, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default combineReducers({
  allIds,
  byId,
});

export const getDecks = state => state.allIds.map(id => state.byId[id]);

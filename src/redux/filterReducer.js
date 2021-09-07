import { combineReducers } from 'redux';
import { ActionsType } from './filterAction';

const contactsReducer = (state = [], { type, payload }) => {
  switch (type) {
    case ActionsType.FILTER_SUCCESS:
      return payload;
    case ActionsType.CONTACT_ADD:
      return [...state, payload];
    case ActionsType.CONTACT_DELETE:
      return state.filter(i => i.id !== payload);
    default:
      return state;
  }
};

const filterReducer = (state = '', { type, payload }) => {
  switch (type) {
    case ActionsType.INPUT_FILTER:
      return payload;
    default:
      return state;
  }
};

export default combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});

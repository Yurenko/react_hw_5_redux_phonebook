import { combineReducers } from 'redux';
import { ActionsType } from './filterAction';

const contactsReduser = (state = [], { type, payload }) => {
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

const filterReduser = (state = '', { type, payload }) => {
  switch (type) {
    case ActionsType.INPUT_FILTER:
      return payload;
    default:
      return state;
  }
};

export default combineReducers({
  contacts: contactsReduser,
  filter: filterReduser,
});

import { createSelector } from 'reselect';

export const getContacts = state => state.filterReducer.contacts;

export const getFilter = state => state.filterReducer.filter;

export const inputFilter = createSelector(
  [getContacts, getFilter],
  (contacts, filter) =>
    contacts.filter(i => i.name.toLowerCase().includes(filter.toLowerCase())),
);

import { createSelector } from '@reduxjs/toolkit';
import { selectNameFilter } from '../filters/selectors';

export const selectContacts = state => state.contacts.items;
export const selectIsLoading = state => state.contacts.loading;
export const selectError = state => state.contacts.error;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, filters) => {
    return contacts.filter(
      ({ name, number }) =>
        name.toLowerCase().includes(filters.toLowerCase()) ||
        number.toLowerCase().includes(filters.toLowerCase()),
    );
  },
);
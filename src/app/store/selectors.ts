import {
  createFeatureSelector,
  createSelector,
  MemoizedSelector,
} from '@ngrx/store';
import { Item } from '../models/item.interface';
import { AppState, ItemsState } from './app.state';

export const selectItemsState = createFeatureSelector<ItemsState>('items');

export const selectItems = createSelector(selectItemsState, (state) => {
  return state.items;
});

export const selectFilteredItems: MemoizedSelector<AppState, Item[]> =
  createSelector(selectItemsState, (state) => {
    let filteredItems = state.items;
    const searchTerm = state.searchTerm;

    if (searchTerm) {
      filteredItems = filteredItems.filter(
        (item) =>
          item.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.price
            ?.toString()
            .toLowerCase()
            .includes(searchTerm.toLowerCase())
      );
    }
    return filteredItems;
  });

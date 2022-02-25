import { createReducer, on } from '@ngrx/store';
import {
  filterItemsByKeywordAction,
  getItemsResponseAction,
  setSortOrder,
} from './actions';
import { ItemsState } from './app.state';

export const initialState: ItemsState = {
  items: [],
  searchTerm: null,
  sortOrder: 'title-asc',
};

export const itemsReducer = createReducer(
  initialState,
  on(getItemsResponseAction, (state, { items }) => ({
    ...state,
    items: items,
  })),
  on(filterItemsByKeywordAction, (state, { keyword }) => ({
    ...state,
    searchTerm: keyword,
  })),
  on(setSortOrder, (state, { sortOrder }) => ({
    ...state,
    sortOrder,
  }))
);

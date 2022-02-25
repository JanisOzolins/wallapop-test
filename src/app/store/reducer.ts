import { createReducer, on } from '@ngrx/store';
import { filterItemsByKeywordAction, getItemsResponseAction } from './actions';
import { ItemsState } from './app.state';

export const initialState: ItemsState = {
  items: [],
  searchTerm: null,
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
  }))
);

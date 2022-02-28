import { createReducer, on } from '@ngrx/store';
import {
  addItemToFavouritesAction,
  filterItemsByKeywordAction,
  getItemsResponseAction,
  removeFromFavouritesAction,
  setSortOrder,
} from './actions';
import { ItemsState } from './app.state';

export const initialState: ItemsState = {
  items: [],
  favouriteItems: [],
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
  })),
  on(addItemToFavouritesAction, (state, { itemToAdd }) => {
    const updatedFavouriteItems =
      state.favouriteItems.indexOf(itemToAdd) === -1
        ? [...state.favouriteItems, itemToAdd]
        : state.favouriteItems;
    return {
      ...state,
      favouriteItems: updatedFavouriteItems,
    };
  }),
  on(removeFromFavouritesAction, (state, { item }) => {
    const itemIndex = state.favouriteItems.indexOf(item);
    let updatedFavouritesList = [...state.favouriteItems];

    if (itemIndex > -1) {
      updatedFavouritesList.splice(itemIndex, 1);
    }

    return {
      ...state,
      favouriteItems: updatedFavouritesList,
    };
  })
);

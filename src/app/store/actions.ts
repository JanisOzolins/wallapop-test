import { createAction, props } from '@ngrx/store';
import { Item } from '../models/item.interface';

interface Action {
  type: string;
}

export const GET_ITEMS_REQUEST = 'GET_ITEMS_REQUEST';
export const GET_ITEMS_RESPONSE = 'GET_ITEMS_RESPONSE';
export const FILTER_ITEMS_BY_KEYWORD = 'FILTER_ITEMS_BY_KEYWORD';
export const SET_SORT_ORDER = 'SET_SORT_ORDER';
export const ADD_TO_FAVOURITES = 'ADD_TO_FAVOURITES';
export const REMOVE_FROM_FAVOURITES = 'REMOVE_FROM_FAVOURITES';

export const getItemsRequestAction = createAction(GET_ITEMS_REQUEST);

export const getItemsResponseAction = createAction(
  GET_ITEMS_RESPONSE,
  props<{ items: Item[] }>()
);

export const filterItemsByKeywordAction = createAction(
  FILTER_ITEMS_BY_KEYWORD,
  props<{ keyword: string }>()
);

export const setSortOrder = createAction(
  SET_SORT_ORDER,
  props<{ sortOrder: string }>()
);

export const addItemToFavouritesAction = createAction(
  ADD_TO_FAVOURITES,
  props<{ itemToAdd: Item }>()
);
export const removeFromFavouritesAction = createAction(
  REMOVE_FROM_FAVOURITES,
  props<{ item: Item }>()
);

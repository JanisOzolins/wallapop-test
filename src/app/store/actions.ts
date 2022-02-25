import { createAction, props } from '@ngrx/store';
import { Item } from '../models/item.interface';

interface Action {
  type: string;
}

export const GET_ITEMS_REQUEST = 'GET_ITEMS_REQUEST';
export const GET_ITEMS_RESPONSE = 'GET_ITEMS_RESPONSE';
export const FILTER_ITEMS_BY_KEYWORD = 'FILTER_ITEMS_BY_KEYWORD';

export const getItemsRequestAction = createAction(GET_ITEMS_REQUEST);

export const getItemsResponseAction = createAction(
  GET_ITEMS_RESPONSE,
  props<{ items: Item[] }>()
);

export const filterItemsByKeywordAction = createAction(
  FILTER_ITEMS_BY_KEYWORD,
  props<{ keyword: string }>()
);

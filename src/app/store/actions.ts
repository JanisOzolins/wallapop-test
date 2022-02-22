import { createAction, props } from '@ngrx/store';
import { Item } from '../models/item.interface';

interface Action {
  type: string;
}

export const GET_ITEMS_REQUEST = 'GET_ITEMS_REQUEST';
export const GET_ITEMS_RESPONSE = 'GET_ITEMS_RESPONSE';

export const getItemsRequestAction = createAction(GET_ITEMS_REQUEST);

export const getItemsResponseAction = createAction(
  GET_ITEMS_RESPONSE,
  props<{ items: Item[] }>()
);

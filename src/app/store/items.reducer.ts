import { createReducer, on } from '@ngrx/store';
import { Item } from '../models/item.interface';
import { getItemsResponseAction } from './actions';

export const initialState: ReadonlyArray<Item> = [];

export const itemsReducer = createReducer(
  initialState,
  on(getItemsResponseAction, (state, { items }) => [...state, ...items])
);

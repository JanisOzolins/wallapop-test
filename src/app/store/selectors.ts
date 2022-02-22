import {
  createFeatureSelector,
  createSelector,
  MemoizedSelector,
} from '@ngrx/store';
import { Item } from '../models/item.interface';
import { AppState } from './app.state';

export const selectItems: MemoizedSelector<object, any> =
  createFeatureSelector<any>('items');

export const selectActualItems: MemoizedSelector<any, Item[]> = createSelector(
  selectItems,
  (model) => {
    console.log('results', model);
    return model;
  }
);

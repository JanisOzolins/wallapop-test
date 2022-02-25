import { Item } from '../models/item.interface';
import { initialState } from './reducer';

export interface AppState {
  items: ItemsState;
}

export interface ItemsState {
  items: Array<Item>;
  searchTerm: string;
}

export const defaultStoreState: AppState = {
  items: initialState,
};

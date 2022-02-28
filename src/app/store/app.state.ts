import { Item } from '../models/item.interface';
import { initialState } from './items.reducer';

export interface AppState {
  items: ItemsState;
}

export interface ItemsState {
  items: Array<Item>;
  favouriteItems: Array<Item>;
  searchTerm: string;
  sortOrder: string;
}

export const defaultStoreState: AppState = {
  items: initialState,
};

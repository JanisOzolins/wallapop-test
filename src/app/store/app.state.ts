import { Item } from '../models/item.interface';

export interface AppState {
  items: ReadonlyArray<Item>;
}

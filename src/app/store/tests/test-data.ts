import { Item } from 'src/app/models/item.interface';

export const item1: Item = {
  title: 'Item 1',
  description: 'Item Desc 1',
  email: '1@item.com',
  price: 1,
  image: null,
};
export const item2: Item = {
  title: 'Item 2',
  description: 'Item Desc 2 SpecialEdition',
  email: '2@item.com',
  price: 2,
  image: null,
};
export const itemsList: Item[] = [item1, item2];

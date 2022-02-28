import {
  createFeatureSelector,
  createSelector,
  MemoizedSelector,
} from '@ngrx/store';
import { Item } from '../models/item.interface';
import { AppState, ItemsState } from './app.state';
var TimSort = require('timsort');

export const selectItemsState = createFeatureSelector<ItemsState>('items');

export const selectItems = createSelector(selectItemsState, (state) => {
  return state.items;
});

export const selectFavouriteItems = createSelector(
  selectItemsState,
  (state) => {
    return state.favouriteItems;
  }
);

export const selectFilteredItems: MemoizedSelector<AppState, Item[]> =
  createSelector(selectItemsState, (state) => {
    let filteredItems = state.items;
    const searchTerm = state.searchTerm;
    const sortOrder = state.sortOrder;

    if (searchTerm) {
      filteredItems = filteredItems.filter(
        (item) =>
          item.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.price
            ?.toString()
            .toLowerCase()
            .includes(searchTerm.toLowerCase())
      );
    }

    const sortedItem = sortItems(filteredItems, sortOrder);
    return sortedItem;
  });

function sortItems(list: Item[], sortOrder: string): Item[] {
  let sortedList: Item[] = [...list];

  if (sortOrder === 'title-asc') TimSort.sort(sortedList, sortByTitleAsc);
  else if (sortOrder === 'title-desc')
    TimSort.sort(sortedList, sortByTitleDesc);
  else if (sortOrder === 'description-asc')
    TimSort.sort(sortedList, sortByDescriptionAsc);
  else if (sortOrder === 'description-desc')
    TimSort.sort(sortedList, sortByDescriptionDesc);
  else if (sortOrder === 'price-asc') TimSort.sort(sortedList, sortByPriceAsc);
  else if (sortOrder === 'price-desc')
    TimSort.sort(sortedList, sortByPriceDesc);
  else if (sortOrder === 'email-asc') TimSort.sort(sortedList, sortEmailAsc);
  else if (sortOrder === 'email-desc')
    TimSort.sort(sortedList, sortByEmailDesc);

  return sortedList;
}

function sortByTitleAsc(a: Item, b: Item): number {
  return a.title.toLocaleLowerCase().localeCompare(b.title.toLocaleLowerCase());
}
function sortByTitleDesc(a: Item, b: Item): number {
  return b.title.toLocaleLowerCase().localeCompare(a.title.toLocaleLowerCase());
}
function sortByDescriptionAsc(a: Item, b: Item): number {
  return a.description
    .toLocaleLowerCase()
    .localeCompare(b.description.toLocaleLowerCase());
}
function sortByDescriptionDesc(a: Item, b: Item): number {
  return b.description
    .toLocaleLowerCase()
    .localeCompare(a.description.toLocaleLowerCase());
}
function sortEmailAsc(a: Item, b: Item): number {
  return a.email.toLocaleLowerCase().localeCompare(b.email.toLocaleLowerCase());
}
function sortByEmailDesc(a: Item, b: Item): number {
  return b.email.toLocaleLowerCase().localeCompare(a.email.toLocaleLowerCase());
}
function sortByPriceAsc(a: Item, b: Item): number {
  return a.price - b.price;
}
function sortByPriceDesc(a: Item, b: Item): number {
  return b.price - a.price;
}

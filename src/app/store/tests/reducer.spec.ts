import { FILTER_ITEMS_BY_KEYWORD, GET_ITEMS_RESPONSE } from '../actions';
import * as itemsReducer from '../items.reducer';
import { itemsList } from './test-data';

describe('ItemsReducer', () => {
  describe('getItemsResponseAction action', () => {
    it('should update the state with fetched list of items', () => {
      const { initialState } = itemsReducer;
      const action = {
        type: GET_ITEMS_RESPONSE,
        items: itemsList,
      };
      const state = itemsReducer.itemsReducer(initialState, action);

      expect(state.items).toBe(itemsList);
    });
  });
  describe('filterItemsByKeywordAction action', () => {
    it('should update the state with the current search term', () => {
      const { initialState } = itemsReducer;
      const action = {
        type: FILTER_ITEMS_BY_KEYWORD,
        keyword: 'my search term',
      };
      const state = itemsReducer.itemsReducer(initialState, action);

      expect(state.searchTerm).toBe('my search term');
    });
  });
});

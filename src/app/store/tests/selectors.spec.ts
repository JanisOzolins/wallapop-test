import { AppState } from '../app.state';
import { selectFilteredItems, selectItems } from '../selectors';
import { itemsList } from './test-data';

describe('selectors', () => {
  const initialState: AppState = {
    items: {
      items: itemsList,
      searchTerm: null,
    },
  };

  it('should select all items from the store', () => {
    const result = selectItems.projector(initialState.items);
    expect(result.length).toEqual(2);
  });

  it('should select all items from the store if not searchTerm is present', () => {
    const result = selectFilteredItems.projector(initialState.items);
    expect(result.length).toEqual(2);
  });

  it('should select only items that match the searchTerm', () => {
    const result = selectFilteredItems.projector({
      ...initialState.items,
      searchTerm: 'SpecialEdition',
    });
    expect(result.length).toEqual(1);
  });
});

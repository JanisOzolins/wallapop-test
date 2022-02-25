import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { MemoizedSelector } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { ItemSummaryComponent } from '../components/item-summary/item-summary.component';
import { Item } from '../models/item.interface';
import { filterItemsByKeywordAction } from '../store/actions';
import { defaultStoreState, ItemsState } from '../store/app.state';
import { selectFilteredItems } from '../store/selectors';
import { itemsList } from '../store/tests/test-data';

import { HomepageComponent } from './homepage.component';

describe('HomepageComponent', () => {
  let component: HomepageComponent;
  let fixture: ComponentFixture<HomepageComponent>;
  let store: MockStore;

  let mocksFilteredItemsSelector: MemoizedSelector<ItemsState, Item[]>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [HomepageComponent, ItemSummaryComponent],
      providers: [provideMockStore({ initialState: defaultStoreState })],
    }).compileComponents();
    store = TestBed.inject(MockStore);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageComponent);
    component = fixture.componentInstance;
    mocksFilteredItemsSelector = store.overrideSelector(
      selectFilteredItems,
      []
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch an action with search term once value has been entered', fakeAsync(() => {
    const dispatchSpy = spyOn(store, 'dispatch');

    component.searchForm.controls['searchBox'].setValue('something');

    tick(400);

    expect(dispatchSpy).toHaveBeenCalledWith(
      filterItemsByKeywordAction({ keyword: 'something' })
    );
  }));

  it('should diplay all items provided by the selector', () => {
    mocksFilteredItemsSelector.setResult(itemsList);
    store.refreshState();
    fixture.detectChanges();

    const itemElements = fixture.debugElement.queryAll(
      By.css('app-item-summary')
    );

    expect(itemElements.length).toBe(2);
  });
});

import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import * as _ from 'lodash';
import { debounceTime, distinctUntilChanged, Observable } from 'rxjs';
import { AppState } from '../store/app.state';
import { Store } from '@ngrx/store';
import { Item } from '../models/item.interface';
import { filterItemsByKeywordAction } from '../store/actions';
import { selectFilteredItems, selectItems } from '../store/selectors';

@Component({
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomepageComponent implements OnInit {
  public searchValue = 'Test';
  public searchForm: FormGroup;
  public items$: Observable<Item[]>;

  constructor(private store: Store<AppState>) {
    this.searchForm = new FormGroup({
      searchBox: new FormControl(''),
    });

    this.items$ = this.store.select(selectFilteredItems);

    this.searchForm
      .get('searchBox')
      ?.valueChanges.pipe(debounceTime(400), distinctUntilChanged())
      .subscribe((searchValue) => {
        this.searchValue = searchValue;

        this.store.dispatch(
          filterItemsByKeywordAction({ keyword: searchValue })
        );
      });
  }

  ngOnInit(): void {}
}

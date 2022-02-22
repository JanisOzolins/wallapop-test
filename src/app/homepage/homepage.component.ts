import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import * as _ from 'lodash';
import { Observable } from 'rxjs';
import { AppState } from '../store/app.state';
import { Store } from '@ngrx/store';
import { selectItems } from '../store/selectors';
import { Item } from '../models/item.interface';

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

    this.items$ = this.store.select(selectItems);
  }

  ngOnInit(): void {}
}

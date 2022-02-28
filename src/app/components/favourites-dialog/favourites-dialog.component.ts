import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Item } from 'src/app/models/item.interface';
import { removeFromFavouritesAction } from 'src/app/store/actions';
import { AppState } from 'src/app/store/app.state';
import { selectFavouriteItems } from 'src/app/store/selectors';

@Component({
  selector: 'app-favourites-dialog',
  templateUrl: './favourites-dialog.component.html',
  styleUrls: ['./favourites-dialog.component.scss'],
})
export class FavouritesDialogComponent implements OnInit {
  public favouriteItems$: Observable<Item[]>;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Item[],
    private store: Store<AppState>
  ) {
    this.favouriteItems$ = this.store.select(selectFavouriteItems);
  }

  ngOnInit() {}

  removeFromFavourites(item: Item): void {
    this.store.dispatch(removeFromFavouritesAction({ item }));
  }
}

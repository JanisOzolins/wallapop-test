import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { FavouritesDialogComponent } from './components/favourites-dialog/favourites-dialog.component';
import { getItemsRequestAction } from './store/actions';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'wallapop-test';
  public faHeart = faHeart;

  constructor(private store: Store<any>, private dialog: MatDialog) {
    this.store.dispatch(getItemsRequestAction());
  }

  openDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.hasBackdrop = true;
    dialogConfig.width = '650px';

    this.dialog.open(FavouritesDialogComponent, dialogConfig);
  }
}

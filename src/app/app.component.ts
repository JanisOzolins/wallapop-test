import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { getItemsRequestAction } from './store/actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'wallapop-test';

  constructor(private store: Store<any>) {
    this.store.dispatch(getItemsRequestAction());
  }
}

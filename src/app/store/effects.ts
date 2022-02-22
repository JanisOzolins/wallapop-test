import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, EMPTY, map, mergeMap, Observable } from 'rxjs';
import { ItemsServiceService } from '../services/items.service';
import { getItemsResponseAction, GET_ITEMS_REQUEST } from './actions';

@Injectable()
export class AppEffects {
  // get all items
  getItems$: Observable<any> = createEffect(() =>
    this.actions$.pipe(
      ofType(GET_ITEMS_REQUEST),
      mergeMap(() =>
        this.itemsService.getItems().pipe(
          map((items) => {
            console.log(items);

            return getItemsResponseAction({ items });
          }),
          catchError(() => EMPTY)
        )
      )
    )
  );
  constructor(
    private actions$: Actions,
    private itemsService: ItemsServiceService
  ) {}
}

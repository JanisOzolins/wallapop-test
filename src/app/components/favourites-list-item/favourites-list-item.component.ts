import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Item } from 'src/app/models/item.interface';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-favourites-list-item',
  templateUrl: './favourites-list-item.component.html',
  styleUrls: ['./favourites-list-item.component.scss'],
})
export class FavouritesListItemComponent implements OnInit {
  @Input() item: Item;
  @Output() removedFromFavourites: EventEmitter<Item> =
    new EventEmitter<Item>();

  public faTrash = faTrash;
  constructor() {}

  ngOnInit() {}

  removeFromFavourites(item: Item): void {
    this.removedFromFavourites.emit(item);
  }
}

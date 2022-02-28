import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Item } from 'src/app/models/item.interface';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-item-summary',
  templateUrl: './item-summary.component.html',
  styleUrls: ['./item-summary.component.scss'],
})
export class ItemSummaryComponent implements OnInit {
  @Input() item: Item;
  @Output() savedToFavourites: EventEmitter<Item> = new EventEmitter<Item>();

  public faHeart = faHeart;

  constructor() {}

  ngOnInit() {}

  saveToFavourites(item: Item): void {
    this.savedToFavourites.emit(item);
  }
}

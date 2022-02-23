import { Component, Input, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item.interface';

@Component({
  selector: 'app-item-summary',
  templateUrl: './item-summary.component.html',
  styleUrls: ['./item-summary.component.scss'],
})
export class ItemSummaryComponent implements OnInit {
  @Input() item: Item;

  constructor() {}

  ngOnInit() {}
}

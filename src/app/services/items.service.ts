import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Item } from '../models/item.interface';

@Injectable({
  providedIn: 'root',
})
export class ItemsServiceService {
  constructor(private http: HttpClient) {}

  getItems(): Observable<Item[]> {
    return this.http
      .get<any>(
        `https://frontend-tech-test-data.s3.eu-west-1.amazonaws.com/items.json`
      )
      .pipe(map((res) => res.items));
  }
}

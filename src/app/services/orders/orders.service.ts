import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Order } from '../../common/order';
import {Observable} from "rxjs/Observable";

@Injectable()
export class OrdersService {
  private url = '/api/orders';

  constructor(private http: HttpClient) { }

  saveOrder(order: Order) {
    return this.http.post(this.url, order);
  }

  getOrders(): Observable<Array<Order>> {
    return this.http.get(this.url);
  }
}

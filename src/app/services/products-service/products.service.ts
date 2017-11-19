import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Product } from '../../common/product';

@Injectable()
export class ProductsService {
  private url = '/api/products/';

  constructor(private http: HttpClient) { }

  getProductsFromCategory(category: string): Observable<Array<Product>> {
    const params = new HttpParams().set('category', category);
    const options = {
      params: params
    };
    return this.http.get(this.url, options);
  }
}

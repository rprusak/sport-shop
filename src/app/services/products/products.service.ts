import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Product } from '../../common/product';
import { isNullOrUndefined } from 'util';
import {del} from 'selenium-webdriver/http';

@Injectable()
export class ProductsService {
  private url = '/api/products/';

  constructor(private http: HttpClient) { }

  getProducts(categories?: Array<string>, name?: string, minimumPrice?: number, maximumPrice?: number, discounted?: boolean): Observable<Array<Product>> {
    let params = new HttpParams();
    if (!isNullOrUndefined(categories) && categories.length > 0) {
      categories.forEach(value => {
        params = params.append('category', value);
      });
    }

    if (!isNullOrUndefined(name)) {
      params = params.set('name', name);
    }

    if (!isNullOrUndefined(minimumPrice)) {
      params = params.set('minimumPrice', minimumPrice.toString());
    }

    if (!isNullOrUndefined(maximumPrice)) {
      params = params.set('maximumPrice', maximumPrice.toString());
    }

    if (!isNullOrUndefined(discounted)) {
      params = params.set('discounted', discounted.toString());
    }

    const options = {
      params: params
    };

    return this.http.get(this.url, options);
  }

  getProductById(id: string): Observable<Product> {
    return this.http.get(this.url + id);
  }

  addProduct(product: Product) {
    delete product._id;
    return this.http.post(this.url, product);
  }

  deleteProduct(product: Product) {
    return this.http.delete(this.url + product._id);
  }

  updateProduct(product: Product) {
    const url = this.url + product._id;
    delete product._id;
    return this.http.put(url, product);
  }

}

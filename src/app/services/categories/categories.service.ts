import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Category} from '../../common/category';

@Injectable()
export class CategoriesService {

  constructor(private http: HttpClient) { }

  getAllCategories(): Observable<Array<Category>> {
    return this.http.get('http://localhost:2403/categories');
  }
}

import { Injectable } from '@angular/core';
import { CATEGORIES } from '../../common/categories-mock';
import { Category } from '../../common/category';

@Injectable()
export class CategoriesService {
  categories: Array<Category> = CATEGORIES;

  constructor() { }

  getCategories(): Array<Category> {
    return this.categories;
  }
}

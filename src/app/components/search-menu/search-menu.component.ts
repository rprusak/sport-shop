import { Component, OnInit } from '@angular/core';
import {CategoriesService} from '../../services/categories/categories.service';
import {Category} from '../../common/category';

@Component({
  selector: 'app-search-menu',
  templateUrl: './search-menu.component.html',
  styleUrls: ['./search-menu.component.css']
})
export class SearchMenuComponent implements OnInit {
  categories: Array<Category> = [];
  selectedCategories: Map<String, Category> = new Map();
  productName = '';
  minimumPrice;
  maximumPrice;
  discounted = false;

  constructor(private categoriesService: CategoriesService) { }

  ngOnInit() {
    this.categories = this.categoriesService.getCategories();
  }

  onCategoryClicked(category: Category) {
    if (!this.selectedCategories.has(category.name)) {
      this.selectedCategories.set(category.name, category);
    } else {
      this.selectedCategories.delete(category.name);
    }
  }

  onSubmit() {
    alert("submited");
  }
}

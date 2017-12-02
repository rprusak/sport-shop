import {Component, Input, OnInit} from '@angular/core';
import { CategoriesService } from '../../services/categories/categories.service';
import { Category } from '../../common/category';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-menu',
  templateUrl: './search-menu.component.html',
  styleUrls: ['./search-menu.component.css']
})
export class SearchMenuComponent implements OnInit {
  categories: Array<Category> = [];

  @Input('selected') selectedCategories: Array<String> = [];
  @Input() productName = null;
  @Input() minimumPrice = null;
  @Input() maximumPrice = null;
  @Input() discounted = null;

  constructor(private categoriesService: CategoriesService, private router: Router) { }

  ngOnInit() {
    this.categories = this.categoriesService.getCategories();
  }

  onCategoryClicked(category: Category) {
    const index = this.selectedCategories.findIndex((value) => {
      return value === category.link;
    });

    if (index === -1) {
      this.selectedCategories.push(category.link);
    } else {
      this.selectedCategories.splice(index, 1);
    }
  }

  isCategorySelected(category: Category): boolean {
    const index = this.selectedCategories.findIndex((value) => {
      return value === category.link;
    });

    return index !== -1;
  }

  onSubmit() {
    const params = {};
    if (this.productName != null && this.productName.length > 0) {
      params['productName'] = this.productName;
    }

    if (this.minimumPrice != null) {
      params['minimumPrice'] = this.minimumPrice;
    }

    if (this.maximumPrice != null) {
      params['maximumPrice'] = this.maximumPrice;
    }

    if (this.discounted != null && this.discounted) {
      params['discounted'] = true;
    }

    if (this.selectedCategories.length > 0) {
      params['category']  = this.selectedCategories;
    }

    this.router.navigate(['/products'], {queryParams: params});
  }
}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CategoriesService } from '../../services/categories/categories.service';
import { Category } from '../../common/category';
import { SearchQuery } from '../../common/search-query';

@Component({
  selector: 'app-search-menu',
  templateUrl: './search-menu.component.html',
  styleUrls: ['./search-menu.component.css']
})
export class SearchMenuComponent implements OnInit {
  categories: Array<Category> = [];
  @Output() onSearch: EventEmitter<SearchQuery> = new EventEmitter();

  @Input('selected') selectedCategories: Array<string> = [];
  @Input() productName = null;
  @Input() minimumPrice = null;
  @Input() maximumPrice = null;
  @Input() discounted = null;

  constructor(private categoriesService: CategoriesService) { }

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
    const query: SearchQuery = new SearchQuery();

    query.productName = this.productName;
    query.maximumPrice = this.maximumPrice;
    query.minimumPrice = this.minimumPrice;
    query.discounted = this.discounted;
    query.categories = this.selectedCategories;

    this.onSearch.emit(query);
  }
}

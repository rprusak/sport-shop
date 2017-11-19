import { Component, OnInit } from '@angular/core';
import {CategoriesService} from '../../services/categories/categories.service';
import {Category} from '../../common/category';

@Component({
  selector: 'app-categories-menu',
  templateUrl: './categories-menu.component.html',
  styleUrls: ['./categories-menu.component.css']
})
export class CategoriesMenuComponent implements OnInit {
  categories: Array<Category> = [];

  constructor(private service: CategoriesService) { }

  ngOnInit() {
    this.service.getAllCategories().subscribe(data => {
      this.categories = data;
    });
  }

}

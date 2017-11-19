import { Component } from '@angular/core';
import { Category } from '../../common/category';

const CATEGORIES: Array<Category> = [
  {
    name: 'Obuwie',
    link: 'obuwie'
  },
  {
    name: 'Odzież',
    link: 'odziez'
  },
  {
    name: 'Sprzęt',
    link: 'sprzet'
  },
  {
    name: 'Akcesoria',
    link: 'akcesoria'
  },
  {
    name: 'Inne',
    link: 'inne'
  }
];

@Component({
  selector: 'app-categories-menu',
  templateUrl: './categories-menu.component.html',
  styleUrls: ['./categories-menu.component.css']
})
export class CategoriesMenuComponent {
  categories: Array<Category> = CATEGORIES;
}

import { Component, Input, OnInit, DoCheck } from '@angular/core';
import { Product } from '../../common/product';
import { Router } from '@angular/router';
import {CartService} from "../../services/cart-service/cart.service";

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements DoCheck {
  @Input() products: Array<Product> = [];
  private displayedProducts: Array<Product> = [];
  private pages: Array<number> = [];
  private activePage = 1;
  private maxPage = 1;
  private startIndex = 0;

  constructor(private router: Router, private cartService: CartService) { }

  ngDoCheck() {
    this.startIndex = (this.activePage - 1) * 3;
    this.maxPage = Math.ceil(this.products.length / 3);

    this.displayedProducts = this.products.slice(this.startIndex, this.startIndex + 3);

    const newPages = [];
    for (let i = 1; i <= this.maxPage; i++)
      newPages.push(i);

    this.pages = newPages;
  }

  selectPage(page: number) {
    this.activePage = page;
  }

  goToPreviousPage() {
    this.activePage -= 1;
  }

  goToNextPage() {
    this.activePage += 1;
  }

  addToCart(product: Product) {
    this.cartService.addProduct(product);
  }

  showProductDetails(product: Product) {
    this.router.navigate(['/products/' + product._id]);
  }
}

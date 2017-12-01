import { Component, OnInit } from '@angular/core';
import { Product } from '../../common/product';
import { CartService } from '../../services/cart-service/cart.service';
import { Router } from '@angular/router';

class CartProduct {
  item: Product;
  count: number;

  constructor(product: Product, count: number) {
    this.item = product;
    this.count = count;
  }
}

@Component({
  selector: 'app-cart-view',
  templateUrl: './cart-view.component.html',
  styleUrls: ['./cart-view.component.css']
})
export class CartViewComponent implements OnInit {
  private products: Array<CartProduct> = [];
  private totalPrice = 0;

  constructor(private cartService: CartService, private router: Router) { }

  ngOnInit() {
    this.cartService.productAdded.subscribe(product => this.loadProducts());
    this.cartService.productDeleted.subscribe(product => this.loadProducts());
    this.loadProducts();
  }

  loadProducts() {
    const cartProducts = this.cartService.getAllProducts();
    const result: Array<CartProduct> = [];
    let price = 0;
    cartProducts.forEach(products => {
      result.push(new CartProduct(products[0], products.length));
      price += products[0].price * products.length;
    });

    this.totalPrice = price;
    this.products = result;
  }

  deleteProduct(product: Product) {
    this.cartService.deleteProduct(product);
  }

  clearCart() {
    this.cartService.clearCart();
  }

  goBackToShop() {
    this.router.navigate(['/home']);
  }

  checkout() {
    this.router.navigate(['/checkout']);
  }
}

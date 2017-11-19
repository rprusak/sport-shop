import { Component, OnInit } from '@angular/core';
import { Product } from '../../common/product';
import { CartService } from '../../services/cart-service/cart.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-cart-view',
  templateUrl: './cart-view.component.html',
  styleUrls: ['./cart-view.component.css']
})
export class CartViewComponent implements OnInit {
  private products: Array<Product> = [];

  constructor(private cartService: CartService, private router: Router) { }

  ngOnInit() {
    this.products = this.cartService.getAllProducts();

    this.cartService.productAdded.subscribe(product => {
      this.products = this.cartService.getAllProducts();
    });

    this.cartService.productDeleted.subscribe(product => {
      this.products = this.cartService.getAllProducts();
    });
  }

  onClearCartButtonClicked() {
    this.cartService.clearCart();
  }

  onGoBackToShopButtonCLicked() {
    this.router.navigate(['/home']);
  }

  onCheckoutButtonClicked() {
    alert('checkout');
  }
}

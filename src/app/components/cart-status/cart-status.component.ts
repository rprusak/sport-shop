import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart/cart.service';

@Component({
  selector: 'app-cart-status',
  templateUrl: './cart-status.component.html',
  styleUrls: ['./cart-status.component.css']
})
export class CartStatusComponent implements OnInit {
  itemsCount: number = 0;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartService.productAdded.subscribe(value => {
      const items = this.cartService.getAllProducts();
      let count = 0;
      items.forEach(products => {
        count += products.length;
      });

      this.itemsCount = count;
    });

    this.cartService.productDeleted.subscribe(value => {
      const items = this.cartService.getAllProducts();
      let count = 0;
      items.forEach(products => {
        count += products.length;
      });

      this.itemsCount = count;
    });
  }

}

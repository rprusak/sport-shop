import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart-service/cart.service';

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
      this.itemsCount = this.cartService.getAllProducts().length;
    });

    this.cartService.productDeleted.subscribe(value => {
      this.itemsCount = this.cartService.getAllProducts().length;
    });
  }

}

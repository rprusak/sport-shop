import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { CartService } from '../../services/cart/cart.service';
import { Order } from '../../common/order';
import { OrdersService } from '../../services/orders/orders.service';

@Component({
  selector: 'app-checkout-view',
  templateUrl: './checkout-view.component.html',
  styleUrls: ['./checkout-view.component.css']
})
export class CheckoutViewComponent implements OnInit {
  private orderValue = 0;
  private order: Order = {
    name: null,
    surname: null,
    city: null,
    address: null,
    delivery: null,
    payment: null,
    status: null
  };

  constructor(private route: ActivatedRoute, private cartService: CartService, private ordersService: OrdersService,
              private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe(() => {
      this.orderValue = this.cartService.getProductsValue();
    });
  }

  onSubmit() {
    this.ordersService.saveOrder(this.order).subscribe(
      value => {
        alert('Twoje zamowienie zostalo zapisane!');
        this.cartService.clearCart();
        this.router.navigate(['/home']);
      }, error => {
        alert('Błąd!');
        console.log(error);
      }
    );
  }
}

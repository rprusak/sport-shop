import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { CartService } from '../../services/cart/cart.service';
import { Order } from '../../common/order';
import { OrdersService } from '../../services/orders/orders.service';
import {AuthenticationService} from "../../services/authentication/authentication.service";
import {Account} from "../../common/account";

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
              private router: Router, private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(() => {
      this.orderValue = this.cartService.getProductsValue();
      this.authenticationService.getStatus().subscribe(
        (account: Account) => {
          this.order.name = account.name;
          this.order.surname = account.surname;
          this.order.city = account.city;
          this.order.address = account.address;
          this.order.userId = account._id;
        }
      );
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

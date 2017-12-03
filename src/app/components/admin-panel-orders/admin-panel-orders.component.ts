import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Order } from '../../common/order';
import {OrdersService} from '../../services/orders/orders.service';

@Component({
  selector: 'app-admin-panel-orders',
  templateUrl: './admin-panel-orders.component.html',
  styleUrls: ['./admin-panel-orders.component.css']
})
export class AdminPanelOrdersComponent implements OnInit {
  private orders: Array<Order> = [];

  constructor(private route: ActivatedRoute, private ordersService: OrdersService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(() => {
      this.loadOrders();
    });
  }

  loadOrders() {
    this.ordersService.getOrders().subscribe(
      orders => {
        this.orders = orders;
      },
      error => {
        alert("Błąd");
        console.log(error);
      }
    );
  }


}


import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from '../../common/order';
import { OrdersService } from '../../services/orders/orders.service';

@Component({
  selector: 'app-admin-panel-orders',
  templateUrl: './admin-panel-orders.component.html',
  styleUrls: ['./admin-panel-orders.component.css']
})
export class AdminPanelOrdersComponent implements OnInit {
  private orders: Array<Order> = [];

  constructor(private route: ActivatedRoute, private router: Router, private ordersService: OrdersService) { }

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

  editOrder(order: Order) {
    this.router.navigate(['/panel/orders/' + order._id]);
  }

  deleteOrder(order: Order) {
    this.ordersService.deleteOrder(order._id).subscribe(
      success => {
        alert("Usunięto zamówienie.");
        this.loadOrders();
      }, error => {
        alert("Błąd");
        console.log(error);
      }
    );
  }
}


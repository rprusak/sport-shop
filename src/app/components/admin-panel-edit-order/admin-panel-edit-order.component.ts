import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Order } from '../../common/order';
import { OrdersService } from '../../services/orders/orders.service';

@Component({
  selector: 'app-admin-panel-edit-order',
  templateUrl: './admin-panel-edit-order.component.html',
  styleUrls: ['./admin-panel-edit-order.component.css']
})
export class AdminPanelEditOrderComponent implements OnInit {
  private order: Order;

  constructor( private route: ActivatedRoute, private ordersService: OrdersService) { }

  ngOnInit() {
    this.route.paramMap.subscribe((value: ParamMap) => {
      const id = value.get('id');
      this.ordersService.getOrderById(id).subscribe(
        order => {
          this.order = order;
        },
        error => {
          alert("Błąd!");
          console.log(error);
        }
      );
    });
  }

  onSubmit() {
    console.log(this.order);
    this.ordersService.updateOrder(this.order).subscribe(
      success => {
        alert('Zaktualizowano produkt');
      }, error => {
        console.log(error);
        alert('Błąd');
      }
    );
  }

}

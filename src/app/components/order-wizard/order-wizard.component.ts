import { Component, OnInit } from '@angular/core';

enum State {
  USER_DATA,
  DELIVERY,
  PAYMENT,
  SUMMARY
}

@Component({
  selector: 'app-order-wizzard',
  templateUrl: './order-wizard.component.html',
  styleUrls: ['./order-wizard.component.css']
})
export class OrderWizardComponent implements OnInit {
  State: typeof State = State;
  state: State = State.USER_DATA;

  constructor() { }

  ngOnInit() {

  }

  goToPreviousPage() {
    if (this.state === State.SUMMARY) {
      this.state = State.PAYMENT;
    } else if (this.state === State.PAYMENT) {
      this.state = State.DELIVERY;
    } else if (this.state === State.DELIVERY) {
      this.state = State.USER_DATA;
    }
  }

  goToNextPage() {
    if (this.state === State.USER_DATA) {
      this.state = State.DELIVERY;
    } else if (this.state === State.DELIVERY) {
      this.state = State.PAYMENT;
    } else if (this.state === State.PAYMENT) {
      this.state = State.SUMMARY;
    }
  }

  makeOrder() {
    alert('make order');
  }

}

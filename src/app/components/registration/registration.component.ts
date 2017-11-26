import { Component, OnInit } from '@angular/core';
import { Account } from '../../common/account';
import {RegistrationService} from '../../services/registration/registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  account: Account = new Account('', '', '', '', '', '', '');
  userPasswordRepeat: '';

  constructor(private registrationService: RegistrationService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.registrationService.createAccount(this.account).subscribe(
      value => {
        const response = JSON.parse(value);
        alert(response.status);
      },
      error => {
        alert(error.error.status);
      }
    );
  }
}

import { Component, OnInit } from '@angular/core';
import { Account } from '../../common/account';
import { RegistrationService } from '../../services/registration/registration.service';

@Component({
  selector: 'app-register-view',
  templateUrl: './register-view.component.html',
  styleUrls: ['./register-view.component.css']
})
export class RegisterViewComponent implements OnInit {
  account: Account = new Account('', '', '', '', '', '', '');
  userPasswordRepeat: '';

  constructor(private registrationService: RegistrationService) { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { Account } from '../../common/account';
import { RegistrationService } from '../../services/registration/registration.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-view',
  templateUrl: './register-view.component.html',
  styleUrls: ['./register-view.component.css']
})
export class RegisterViewComponent implements OnInit {
  account: Account = new Account('', '', '', '', '', '', '');
  userPasswordRepeat: '';

  constructor(private registrationService: RegistrationService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    alert("submit!");
    this.registrationService.createAccount(this.account).subscribe(
      () => {
        alert("Twoje konto zostało utworzone!");
        this.router.navigate(['/login']);
      },
      error => {
        alert(error.error.status);
      }
    );
  }
}

import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.css']
})
export class LoginViewComponent implements OnInit {
  private userName = '';
  private userPassword = '';

  constructor(private authenticationService: AuthenticationService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    this.authenticationService.authenticate(this.userName, this.userPassword).subscribe(
      value => {
        this.router.navigate(['/home']);
      },
      error => {
        console.log(error);
        alert("error");
      });
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Account } from '../../common/account';
import {AuthenticationService} from '../../services/authentication/authentication.service';

@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.css']
})
export class ProfileViewComponent implements OnInit {
  account: Account;

  constructor(private route: ActivatedRoute, private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(() => {
      this.authenticationService.getStatus().subscribe(
        acc => {
          this.account = acc;
        }, error => {
          alert('Błąd!');
          console.log(error);
        }
      );
    });
  }

}

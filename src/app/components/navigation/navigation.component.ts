import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication/authentication.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  private isAuthenticated = false;

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.authenticationService.authenticationStateChanged.subscribe(authenticated => {
      this.isAuthenticated = authenticated;
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  private isAuthenticated = false;

  constructor(private authenticationService: AuthenticationService, private router: Router) { }

  ngOnInit() {
    this.authenticationService.authenticationStateChanged.subscribe(authenticated => {
      this.isAuthenticated = authenticated;
    });
  }

  logout() {
    this.authenticationService.logout().subscribe(value => {
      alert('Zostałeś wylogowany');
      this.router.navigate(['/home']);
    }, error => {
      alert("error");
      console.log(error);
    });
  }
}

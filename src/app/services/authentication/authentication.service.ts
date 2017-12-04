import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Account } from '../../common/account';

@Injectable()
export class AuthenticationService {
  private loginUrl = '/api/login';
  private logoutUrl = '/api/logout';

  // Observable source
  private authenticationStateChangeSource = new Subject<boolean>();

  authenticationStateChanged = this.authenticationStateChangeSource.asObservable();

  constructor(private http: HttpClient) { }

  authenticate(username: string, password: string) {
    const body = {
      username: username,
      password: password
    };

    return this.http.post(this.loginUrl, body).map((response: Response) => {
      this.authenticationStateChangeSource.next(true);
      return response;
    });
  }

  logout() {
    return this.http.get(this.logoutUrl).map((response: Response) => {
      this.authenticationStateChangeSource.next(false);
      return response;
    });
  }

  getStatus(): Observable<Account> {
    return this.http.get('/api/status');
  }

}

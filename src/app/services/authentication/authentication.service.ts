import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthenticationService {
  private url = '/api/login';

  // Observable source
  private authenticationStateChangeSource = new Subject<boolean>();

  authenticationStateChanged = this.authenticationStateChangeSource.asObservable();

  constructor(private http: HttpClient) { }

  authenticate(username: string, password: string) {
    const body = {
      username: username,
      password: password
    };

    return this.http.post(this.url, body).map((response: Response) => {
      this.authenticationStateChangeSource.next(true);
      return response;
    });
  }

}

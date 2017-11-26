import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Account } from '../../common/account';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class RegistrationService {

  constructor(private http: HttpClient) { }

  createAccount(account: Account): Observable<any> {
    const body = {
      username: account.username,
      name: account.name,
      surname: account.surname,
      email: account.email,
      city: account.city,
      address: account.address,
      password: account.password
    };
    return this.http.post('/api/register', body);
  }
}

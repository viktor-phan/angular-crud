import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _registerUrl = 'http://localhost:8000/api/register';
  private _loginUrl = 'http://localhost:8000/api/login';

  loginSubject: Subject<boolean> = new Subject();
  constructor(private httpClient: HttpClient) {}

  registerUser(user: any) {
    return this.httpClient.post(this._registerUrl, user);
  }

  loginUser(user: any) {
    return this.httpClient.post(this._loginUrl, user);
  }
  loggedIn() {
    return !!localStorage.getItem('token');
  }
  getToken() {
    return localStorage.getItem('token');
  }
  logOut() {
    return localStorage.clear();
  }
}

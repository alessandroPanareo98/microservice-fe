import { Injectable } from '@angular/core';
import { Auth } from './auth';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _auth?: Auth;
  auth = new BehaviorSubject(new Auth());

  constructor() { }

  setAuth(auth: Auth){
    this._auth = auth;
    this.auth.next(auth);
  }

  getToken(){
    return this._auth?.accessToken;
  }

  getRefreshToken(){
    return this._auth?.refreshToken;
  }

  getIdToken(){
    return this._auth?.idToken;
  }

  logout(){
    this.setAuth(new Auth());
  }
}

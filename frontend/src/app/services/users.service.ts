import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginUserData, RegisterUserData, User } from '../models/user.model';
import { environment as env } from '../../environments/environment';
import { SocialUser } from 'angularx-social-login';
import { AppState } from '../store/types';
import { Store } from '@ngrx/store';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private http: HttpClient, private store: Store<AppState>) {}

  registerUser(userData: RegisterUserData) {
    const formData = new FormData();
    Object.keys(userData).forEach(key => {
      if (userData[key] !== null) formData.append(key, userData[key]);
    });
    return this.http.post<User>(env.apiUrl + '/users', formData);
  }

  login(userData: LoginUserData) {
    return this.http.post<User>(env.apiUrl + '/users/sessions', userData);
  }

  loginWithFb(userData: SocialUser) {
    return this.http.post<User>(env.apiUrl + '/users/facebookLogin', userData);
  }

  logout() {
    return this.http.delete(env.apiUrl + '/users/sessions');
  }
}

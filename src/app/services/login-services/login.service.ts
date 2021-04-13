import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor() {}
  login(loginData) {
    if (loginData.user_type == 'agent' && loginData.password == '123') {
      return {
        user_type: 'agent',
      };
    } else if (loginData.user_type == 'admin' && loginData.password == '123') {
      return {
        user_type: 'admin',
      };
    } else if (loginData.user_type == 'user' && loginData.password == '123') {
      return {
        user_type: 'user',
      };
    } else {
      return {
        error: {
          message: 'Invalid Login',
        },
      };
    }
  }
}

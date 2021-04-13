import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login-services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  email;
  password;
  constructor(private router: Router, private loginService: LoginService) {}

  ngOnInit(): void {}
  dologin() {
    const obj = {
      user_type: this.email,
      password: this.password,
    };
    const loginData = this.loginService.login(obj);
    if (loginData.error) {
      console.log(loginData.error);
    } else {
      if (loginData.user_type == 'agent') {
        this.router.navigate(['agent']);
      } else if (loginData.user_type == 'user') {
        this.router.navigate(['user']);
      } else if (loginData.user_type == 'admin') {
        this.router.navigate(['admin']);
      }
    }
  }
}

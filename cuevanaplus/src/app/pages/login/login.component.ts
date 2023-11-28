import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";
import {AppManagerService} from "../../services/app-manager.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  hidePassword = true;

  constructor(private router: Router, private authService: AuthService) { }

  submit() {
    this.authService.getAuth(this.username, this.password)
  }


  togglePasswordVisibility() {
    this.hidePassword = !this.hidePassword;
  }


}

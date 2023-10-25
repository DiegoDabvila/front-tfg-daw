import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  login: boolean = false;
  register: boolean = !this.login

  constructor() { }

  ngOnInit(): void {
    console.log('entra')
  }

}

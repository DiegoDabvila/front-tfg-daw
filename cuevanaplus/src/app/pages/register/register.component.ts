import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";
import {RegisterService} from "./services/register.service";
import {ResgisterInterface} from "./Interfaces/resgister.interface";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  hidePassword = true;
  hideConfirmPassword = true;
  constructor(private router: Router, private registerService: RegisterService) { }

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.registerService.registerUser(this.mappFormToUserData(form)).subscribe(()=> {
        this.router.navigate(['/login'])
      })
    }
  }

  passwordMatchValidator(form: NgForm) {
    const password = form.value.password;
    const confirmPassword = form.value.confirmPassword;

    if (password !== confirmPassword) {
      form.controls['confirmPassword'].setErrors({ 'passwordMismatch': true });
    } else {
      form.controls['confirmPassword'].setErrors(null);
    }
  }

  mappFormToUserData(form: NgForm){
    const userData: ResgisterInterface = {
      name: form.value.name,
      username: form.value.username,
      surnames: form.value.surnames,
      password: form.value.password
    }
    return userData;
  }

  togglePasswordVisibility() {
    this.hidePassword = !this.hidePassword;
  }

  toggleConfirmPasswordVisibility() {
    this.hideConfirmPassword = !this.hideConfirmPassword;
  }


}

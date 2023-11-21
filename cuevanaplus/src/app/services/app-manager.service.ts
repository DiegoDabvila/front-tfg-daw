import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {UserInterface} from "../Interfaces/usersInterface.interface";

@Injectable({
  providedIn: 'root'
})
export class AppManagerService {

  #showHeader = new BehaviorSubject<boolean>(false);
  showHeader$ = this.#showHeader.asObservable()

  #user = new BehaviorSubject<UserInterface | null>(null);
  user$ = this.#user.asObservable()

  constructor() { }

  updateShowHeader(value: boolean) {
    this.#showHeader.next(value)
  }

  updateUserInfo(user: UserInterface){
    this.#user.next(user)
  }

}

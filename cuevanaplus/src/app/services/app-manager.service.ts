import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AppManagerService {

  #showHeader = new BehaviorSubject<boolean>(false);
  showHeader$ = this.#showHeader.asObservable()
  constructor() { }

  updateShowHeader(value: boolean) {
    this.#showHeader.next(value)
  }


}

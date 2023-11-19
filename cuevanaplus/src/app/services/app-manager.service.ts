import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {FilmInterface, UserInterface} from "../Interfaces/filmInterface";

@Injectable({
  providedIn: 'root'
})
export class AppManagerService {

  #showHeader = new BehaviorSubject<boolean>(false);
  showHeader$ = this.#showHeader.asObservable()

  #user = new BehaviorSubject<UserInterface | null>(null);
  user$ = this.#user.asObservable()

  #editedMovie = new BehaviorSubject<FilmInterface | null>(null)
  editedMovie$ = this.#editedMovie.asObservable()
  constructor() { }

  updateShowHeader(value: boolean) {
    this.#showHeader.next(value)
  }

  updateUserInfo(user: UserInterface){
    this.#user.next(user)
  }

  updateEditedMovie(movie: FilmInterface) {
    this.#editedMovie.next(movie);
  }

}

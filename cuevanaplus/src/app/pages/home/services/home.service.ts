import { Injectable } from '@angular/core';
import {HomeRepositoryService} from "./home.repository";

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private homeRepository: HomeRepositoryService) { }

  getAllFilms(){
   return this.homeRepository.getAllFilms()
  }

  getUserFilm(){
    return this.homeRepository.getUserFilm();
  }

}

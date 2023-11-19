import { Injectable } from '@angular/core';
import {MovieEditRepository} from "./movie-edit.repository";
import {UpdateFilmInterface} from "../../../Interfaces/filmInterface.interface";

@Injectable({
  providedIn: 'root'
})
export class MovieEditService {

  constructor(private movieEditRepository: MovieEditRepository) { }

  getFilmById(id: number){
   return  this.movieEditRepository.getFilmById(id)
  }

  updateFilm(id: number, body: UpdateFilmInterface){
   return this.movieEditRepository.updateFilm(id, body)
  }

}

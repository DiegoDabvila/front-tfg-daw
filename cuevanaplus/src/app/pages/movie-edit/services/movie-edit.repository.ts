import {Injectable, Injector} from '@angular/core';
import {AbstractRepository} from "../../../services/abstract.repository";
import {map} from "rxjs";
import {AllFilmsRequestModel, FilmModelModel} from "../../../models/filmModel.model";
import {FilmInterfaceInterface, UpdateFilmInterface} from "../../../Interfaces/filmInterface.interface";

@Injectable({
  providedIn: 'root'
})
export class MovieEditRepository extends AbstractRepository{

  constructor(injector: Injector) {
    super(injector)
  }

  getFilmById(id: number){
    return this.doRequest<FilmInterfaceInterface>(
      'GET',
      `films/admin/${id}`
    ).pipe(
      map((film) => new FilmModelModel(film))
    )
  }

  updateFilm(id: number, body: UpdateFilmInterface){
    return this.doRequest<UpdateFilmInterface>(
      'PUT',
      `films/admin/${id}`,
      undefined,
      body
    ).pipe()
  }

}

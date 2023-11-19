import {
  AllFilmsRequestInterface,
  DirectorInterface, FilmForUserInterface, FilmInterface,
  UserOnMovieInterface, UsersInterface
} from "../Interfaces/filmInterface";

export class AllFilmsRequestModel{
  director: DirectorInterface;
  directorId: number;
  id: number;
  imageUrl: string
  name: string;
  score: number;
  users: UsersInterface[];
  year: number

  constructor(data: AllFilmsRequestInterface) {
    this.director = data.director;
    this.directorId = data.directorId;
    this.id = data.id;
    this.imageUrl = data.imageUrl;
    this.name = data.name;
    this.score = data.score;
    this.users = data.users;
    this.year = data.year
  }
}


export class FilmForUserModel {
  asignnationDate: string;
  expirationTime: number;
  movieId: number;
  movie: FilmInterface;
  userId: number

  constructor(data: FilmForUserInterface) {
    this.asignnationDate= data.asignnationDate;
    this.expirationTime= data.expirationTime;
    this.movieId= data.movieId;
    this.movie= data.movie;
    this.userId= data.userId;
  }

}


export class FilmModel {
  director: DirectorInterface;
  directorId: number;
  id: number;
  imageUrl: string;
  name: string;
  score: number;
  year: number

  constructor(data: FilmInterface) {
    this.director = data.director
    this.directorId = data.directorId
    this.id = data.id
    this.imageUrl = data.imageUrl
    this.name = data.name
    this.score = data.score
    this.year = data.year
  }
}

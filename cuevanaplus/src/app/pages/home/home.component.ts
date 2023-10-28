import { Component, OnInit } from '@angular/core';
import {RentedMovieResponse} from "../../Interfaces/movie.interface";
import {retedMovieResponseMock} from "../../mocks/rented-movie-response.mock";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  films: RentedMovieResponse[] = []
  numberOfMovies = 25

  constructor(private router: Router) { }

  ngOnInit(): void {
    for(let i = 0; i < this.numberOfMovies; i++){
      this.films.push(retedMovieResponseMock())
    }
  }

  goTodetailPage(movieId: number){
    this.router.navigate(['movie-edit'],{queryParams:{movieId}})
  }

}

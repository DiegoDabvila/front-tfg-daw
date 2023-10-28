import { Component, OnInit } from '@angular/core';
import {retedMovieResponseMock} from "../../mocks/rented-movie-response.mock";

@Component({
  selector: 'app-movie-edit',
  templateUrl: './movie-edit.component.html',
  styleUrls: ['./movie-edit.component.scss']
})
export class MovieEditComponent implements OnInit {

  film = retedMovieResponseMock();

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import {retedMovieResponseMock} from "../../mocks/rented-movie-response.mock";
import {AppManagerService} from "../../services/app-manager.service";

@Component({
  selector: 'app-movie-edit',
  templateUrl: './movie-edit.component.html',
  styleUrls: ['./movie-edit.component.scss']
})
export class MovieEditComponent implements OnInit {

  film = retedMovieResponseMock();

  constructor(private appManager: AppManagerService) {
    this.appManager.updateShowHeader(true)
  }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AppManagerService} from "../../services/app-manager.service";
import {HomeService} from "./services/home.service";
import {AllFilmsRequestModel} from "../../models/filmModel.model";
import {AllFilmsRequestInterface, FilmForUserInterface} from "../../Interfaces/filmInterface.interface";
import {debounceTime} from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  allFilms: AllFilmsRequestInterface[] = []
  userFilms: FilmForUserInterface[] = []
  isAdmin?: boolean;
  loadedData = false

  constructor(
    private router: Router,
    private appManager: AppManagerService,
    private homeService: HomeService
  ) {
    this.appManager.updateShowHeader(true)
  }

  ngOnInit(): void {
    this.appManager.user$.subscribe((userData) => {
      this.isAdmin = userData?.isAdmin
      if (this.isAdmin){
        this.getAdminFilmsData()
      }else {
        this.getUserFilmsData()
      }
    })
  }

  goToEditPage(movieId: number){
    this.router.navigate(['movie-edit'],{queryParams:{movieId}})
  }

  getAdminFilmsData(){
    if (this.loadedData) return;
    this.loadedData = true;
    this.homeService.getAllFilms().pipe().subscribe((films) => {
      this.allFilms = films

    })
  }

  getUserFilmsData(){
    if (this.loadedData) return;
    this.loadedData = true;
    this.homeService.getUserFilm().pipe().subscribe(films => {
      this.userFilms = films
    })
  }

}

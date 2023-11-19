import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AppManagerService} from "../../services/app-manager.service";
import {HomeService} from "./services/home.service";
import {AllFilmsRequestModel} from "../../models/filmModel";
import {AllFilmsRequestInterface, FilmForUserInterface} from "../../Interfaces/filmInterface";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  allFilms: AllFilmsRequestInterface[] = []
  userFilms: FilmForUserInterface[] = []
  isAdmin?: boolean;

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
    this.homeService.getAllFilms().subscribe((films) => {
      this.allFilms = films
      console.log(this.allFilms)
    })
  }

  getUserFilmsData(){
    this.homeService.getUserFilm().subscribe(films => {
      this.userFilms = films
      console.log(this.userFilms)
    })
  }

}

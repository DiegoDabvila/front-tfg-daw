import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSidenav} from "@angular/material/sidenav";
import {AppManagerService} from "./services/app-manager.service";
import {UserInterface} from "./Interfaces/usersInterface.interface";
import {AuthService} from "./services/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'cuevanaplus';
  showHeader = true
  user: UserInterface|null = null;

  @ViewChild('sidenav', { static: true }) sidenav!: MatSidenav;

  constructor(private appManager: AppManagerService) {
  }

  ngOnInit() {
    this.appManager.showHeader$.subscribe(value=>this.showHeader=value)
    this.appManager.user$.subscribe(user => {
      this.user = user
    })
  }

  openSidenav() {
    this.sidenav.open();
  }

  closeSideNav(){
    this.sidenav.close();
  }

  logOut(){
    localStorage.removeItem('token');
    this.showHeader = false
  }

}

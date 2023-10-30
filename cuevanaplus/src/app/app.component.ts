import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSidenav} from "@angular/material/sidenav";
import {AppManagerService} from "./services/app-manager.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'cuevanaplus';
  showHeader = true
  @ViewChild('sidenav', { static: true }) sidenav!: MatSidenav;

  constructor(private appManager: AppManagerService) {
  }

  ngOnInit() {
    this.appManager.showHeader$.subscribe(value=>this.showHeader=value)
    console.log(this.showHeader)
  }

  openSidenav() {
    this.sidenav.open();
  }

  closeSideNav(){
    this.sidenav.close();
  }

}

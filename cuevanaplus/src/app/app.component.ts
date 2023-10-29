import {Component, ViewChild} from '@angular/core';
import {MatSidenav} from "@angular/material/sidenav";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cuevanaplus';

  @ViewChild('sidenav', { static: true }) sidenav!: MatSidenav;

  openSidenav() {
    this.sidenav.open();
  }

  closeSideNav(){
    this.sidenav.close();
  }

}

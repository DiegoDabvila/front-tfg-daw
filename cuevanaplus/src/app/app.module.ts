import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {LoginModule} from "./pages/login/login.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatInputModule} from "@angular/material/input";
import {RegisterModule} from "./pages/register/register.module";
import {HomeModule} from "./pages/home/home.module";
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import {MovieEditModule} from "./pages/movie-edit/movie-edit.module";
import {UserManagementModule} from "./pages/user-management/user-management.module";


@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    MovieDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    LoginModule,
    RegisterModule,
    HomeModule,
    MovieEditModule,
    UserManagementModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

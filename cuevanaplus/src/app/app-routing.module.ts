import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorizationGuard } from './guards/authorization/authorization.guard';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then((m)=> m.LoginModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then((m)=> m.RegisterModule)
  },
  {
    path: 'home',
    canActivate: [AuthorizationGuard],
    loadChildren: () => import('./pages/home/home.module').then((m)=> m.HomeModule)
  },
  {
    path: 'movie-edit',
    loadChildren: () => import('./pages/movie-edit/movie-edit.module').then((m)=> m.MovieEditModule)
  },
  {
    path: 'user-management',
    loadChildren: () => import('./pages/user-management/user-management.module').then((m)=> m.UserManagementModule)
  },
  {
    path: '**',
    redirectTo: 'login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

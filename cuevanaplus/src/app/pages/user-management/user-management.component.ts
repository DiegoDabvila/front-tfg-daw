import { Component, OnInit } from '@angular/core';
import {retedMovieResponseMock} from "../../mocks/rented-movie-response.mock";
import {UserInterface} from "../../Interfaces/movie.interface";

enum OpcionesUsuarioEnum {
  CrearUsuario = 'Crear Usuario',
  EditarUsuario = 'Editar Usuario'
}


@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})
export class UserManagementComponent implements OnInit {
  public user: UserInterface = {
    id:0,
    name: '',
    surnames: '',
    username: '',
    isAdmin: false
  };
  users: UserInterface[]=[]
  numberOfMovies = 25
  createOrEdit: string = OpcionesUsuarioEnum.CrearUsuario
  constructor() { }

  ngOnInit(): void {
    for(let i = 0; i < this.numberOfMovies; i++){
      this.users.push(
        {
          id: 1,
          username: 'Peras',
          name: 'Pablo',
          surnames: 'Perez',
          isAdmin: true
        })
    }
  }

  selectUser(event: UserInterface){
    this.createOrEdit = `${OpcionesUsuarioEnum.EditarUsuario} ${event.name}`
    this.user = event
  }

  editUser(user: Partial<UserInterface>){
    console.log(user)
  }

}

import { Component, OnInit } from '@angular/core';
import {retedMovieResponseMock} from "../../mocks/rented-movie-response.mock";
import {UserInterface} from "../../Interfaces/movie.interface";
import {FormControl} from "@angular/forms";
import {map, Observable, startWith} from "rxjs";

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
    id: 0,
    name: '',
    surnames: '',
    username: '',
    isAdmin: false
  };
  filterControl = new FormControl();
  filteredOptions?: Observable<UserInterface[]>;

  users: UserInterface[] = [];
  numberOfUsers = 25;
  createOrEdit: string = OpcionesUsuarioEnum.CrearUsuario;

  constructor() {}

  ngOnInit(): void {
    this.loadMockData();
    this.filteredOptions = this.filterControl.valueChanges.pipe(
      startWith(''),
      map(value => this.filterUsers(value))
    );
  }

  selectUser(event: UserInterface) {
    this.createOrEdit = `${OpcionesUsuarioEnum.EditarUsuario} ${event.name}`;
    this.user = event;
  }

  editUser(user: Partial<UserInterface>) {
    console.log(user);
  }

  loadMockData() {
    for (let i = 0; i < this.numberOfUsers; i++) {
      this.users.push({
        id: i,
        username: `User${i}`,
        name: `User ${i}`,
        surnames: 'Surname',
        isAdmin: i % 2 === 0
      });
    }
  }

  filterUsers(value: string): UserInterface[] {
    const filterValue = value.toLowerCase();
    return this.users.filter(user =>
      user.name.toLowerCase().includes(filterValue)
    );
  }
}

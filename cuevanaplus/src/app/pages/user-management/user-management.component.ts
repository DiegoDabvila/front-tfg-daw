import { Component, OnInit } from '@angular/core';
import {UserInterface} from "../../Interfaces/filmInterface";
import {FormControl} from "@angular/forms";
import {map, Observable, startWith} from "rxjs";
import {AppManagerService} from "../../services/app-manager.service";

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

  constructor(private appManager: AppManagerService) {
    this.appManager.updateShowHeader(true)
  }

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
  }

  loadMockData() {
    for (let i = 0; i < this.numberOfUsers; i++) {
      this.users.push({
        username: `UserName ${i}`,
        name: `User ${i}`,
        surnames: 'Surname',
        isAdmin: i % 2 === 0
      });
    }
  }

  filterUsers(value: string): UserInterface[] {
    const filterValue = value.toLowerCase();
    return this.users.filter(user =>
      user.username.toLowerCase().includes(filterValue)
    );
  }
}

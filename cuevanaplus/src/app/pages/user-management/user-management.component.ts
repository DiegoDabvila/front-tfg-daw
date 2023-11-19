import {Component, OnInit, ViewChild} from '@angular/core';
import {UserInterface} from "../../Interfaces/usersInterface.interface";
import {FormControl, NgForm} from "@angular/forms";
import {map, Observable, startWith} from "rxjs";
import {AppManagerService} from "../../services/app-manager.service";
import {UserManagementService} from "./services/user-management.service";
import {MatSnackBar} from "@angular/material/snack-bar";

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

  @ViewChild('userForm') userForm!: NgForm;

  public user: UserInterface = {
    name: '',
    surnames: '',
    username: '',
    isAdmin: false
  };
  filterControl = new FormControl();
  filteredOptions?: Observable<UserInterface[]>;
  isEdittingMode = false;
  hidePassword = true;
  users: UserInterface[] = [];
  createOrEdit: string = OpcionesUsuarioEnum.CrearUsuario;

  constructor(
    private appManager: AppManagerService,
    private userManagementService: UserManagementService,
    private snackBar: MatSnackBar
  ) {
    this.appManager.updateShowHeader(true)
  }

  ngOnInit(): void {
    this.getUsersData();
    this.filteredOptions = this.filterControl.valueChanges.pipe(
      startWith(''),
      map(value => this.filterUsers(value))
    );

  }

  getUsersData(){
    this.userManagementService.getAllUsers().subscribe((users)=>{
      this.users = users;
    })
  }

  editUser(user: UserInterface) {
    this.userManagementService.updateUser(user.id as number, user).subscribe((e)=>{
      this.requestAction()
    })
  }

  registerUser(user: UserInterface){
    console.log(user)
    this.userManagementService.registerUser(user).subscribe(()=>{
      this.requestAction()
    })
  }

  deleteUser(userId?: number){
    this.userManagementService.deleteUser(userId as number).subscribe((e)=>{
      this.requestAction()
    })
  }

  filterUsers(value: string): UserInterface[] {
    const filterValue = value.toLowerCase();
    return this.users.filter(user =>
      user.username.toLowerCase().includes(filterValue)
    );
  }

  selectUser(event: UserInterface) {
    this.createOrEdit = `${OpcionesUsuarioEnum.EditarUsuario} ${event.name}`;
    this.isEdittingMode = true;
    this.user = event;
  }

  requestAction(){
    this.snackBar.open("Registro con exito", "Cerrar", {duration: 3000})
    this.resetForm();
    this.getUsersData();
  }

  resetForm() {
    this.user = {
      name: '',
      surnames: '',
      username: '',
      isAdmin: false
    };
    this.createOrEdit = OpcionesUsuarioEnum.CrearUsuario;
    this.isEdittingMode = false;
    if (this.userForm) {
      this.userForm.resetForm();
    }
  }

  togglePasswordVisibility() {
    this.hidePassword = !this.hidePassword;
  }
}

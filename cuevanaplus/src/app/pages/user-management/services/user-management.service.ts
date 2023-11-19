import { Injectable } from '@angular/core';
import {UserManagementRepository} from "./user-management.repository";
import {UserInterface} from "../../../Interfaces/usersInterface.interface";

@Injectable({
  providedIn: 'root'
})
export class UserManagementService {

  constructor(private userManagementRepository: UserManagementRepository) { }

  getAllUsers() {
    return this.userManagementRepository.getAllUsers();
  }

  registerUser(user: UserInterface){
    return this.userManagementRepository.postRegisterUser(user);
  }

  updateUser(userId:number, user: UserInterface){
    return this.userManagementRepository.updateUser(userId, user);
  }

  deleteUser(userId: number){
    return this.userManagementRepository.deleteUser(userId);
  }

}

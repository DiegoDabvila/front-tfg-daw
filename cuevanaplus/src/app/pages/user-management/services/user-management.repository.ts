import {Injectable, Injector} from '@angular/core';
import {AbstractRepository} from "../../../services/abstract.repository";
import {map} from "rxjs";
import {UsersModelModel} from "../../../models/usersModel.model";
import {UserInterface} from "../../../Interfaces/usersInterface.interface";

@Injectable({
  providedIn: 'root'
})
export class UserManagementRepository extends AbstractRepository{

  constructor(injector: Injector) {
    super(injector)
  }

  getAllUsers() {
    return this.doRequest<UserInterface[]>(
      'GET',
      `users`
    ).pipe(
      map(users => users.map(user => new UsersModelModel(user)))
    );
  }

  postRegisterUser(body: UserInterface){
    return this.doRequest<UserInterface>(
      'POST',
      `users`,
      undefined,
      body
    ).pipe(
      map(user => new UsersModelModel(user))
    );
  }

  updateUser(userId: number, body: UserInterface){
    return this.doRequest<UserInterface>(
      'PUT',
      `users/${userId}`,
      undefined,
      body
    ).pipe(
      map(user => new UsersModelModel(user))
    );
  }

  deleteUser(userId: number){
    return this.doRequest<UserInterface>(
      'DELETE',
      `users/${userId}`,
      undefined
    ).pipe(
      map(user => new UsersModelModel(user))
    );
  }

}

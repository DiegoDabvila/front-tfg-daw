import {UserInterface} from "../Interfaces/usersInterface.interface";

export class UsersModelModel{
  id?: number;
  name: string;
  surnames: string;
  username: string;
  isAdmin: boolean;

  constructor(data: UserInterface) {
      this.id = data.id,
      this.name = data.name,
      this.surnames = data.surnames,
      this.username = data.username,
      this.isAdmin = data.isAdmin
  }
}

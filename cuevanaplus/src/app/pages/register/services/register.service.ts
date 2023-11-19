import { Injectable } from '@angular/core';
import {RegisterRepository} from "./register.repository";
import {ResgisterInterface} from "../Interfaces/resgister.interface";

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private registerRepository: RegisterRepository) { }

  registerUser(body: ResgisterInterface){
   return  this.registerRepository.postRegister(body)
  }

}

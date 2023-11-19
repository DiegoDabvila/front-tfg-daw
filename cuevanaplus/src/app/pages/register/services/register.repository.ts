import {Injectable, Injector} from '@angular/core';
import {AbstractRepository} from "../../../services/abstract.repository";
import {ResgisterInterface} from "../Interfaces/resgister.interface";

@Injectable({
  providedIn: 'root'
})
export class RegisterRepository extends AbstractRepository{

  constructor(injector: Injector) {
    super(injector)
  }

  postRegister(body: ResgisterInterface){
    return this.doRequest(
      'POST',
      `register`,
      undefined,
      body
    ).pipe()
  }

}

import { Injectable } from '@angular/core'; //

@Injectable() // es una clase que se puede inyectar
export class OperationsService { // una clase cualquiera

  constructor() { }

  addSuffix(value:string):string {
    return value + ' ::suffix';
  }
}

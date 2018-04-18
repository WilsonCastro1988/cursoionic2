import { Component } from '@angular/core';

@Component({
  selector: 'project',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string= 'Mi aplicacion';  

  sayHello():string {
  	//let text = 'hola mundo';   let es para saber que la variable va a cambiar
  	//const text = 'HOLA MUNDO';const  constante la variable 
  	//todos los elementos de instacia la defino con la palabra this, no es opcional, es obligatorio.
  	let text = 'hola mundo';  	
  	return  text;
  }
}

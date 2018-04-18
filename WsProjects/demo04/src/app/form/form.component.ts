import { Component, OnInit } from '@angular/core';
import {OperationsService} from '../operations.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  title: string;
  result2:string;
  constructor(private operations:OperationsService) { }

  

  ngOnInit() {

  }
   lostFocus(){

    this.result2= this.operations.addSuffix("prueba");
    console.log("======= lost focus ==========");

    console.log( this.result2);
   }

   changeTitle(){
     this.result2= this.operations.addSuffix("prueba");
   }

}

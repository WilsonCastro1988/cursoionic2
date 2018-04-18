import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-suma',
  templateUrl: './form-suma.component.html',
  styleUrls: ['./form-suma.component.css']
})
export class FormSumaComponent implements OnInit {

  value1: number;
  value2: number;
  total:number;
  constructor() { }

  ngOnInit() {
  }

  sumar(){
    this.total= this.value1 + this.value2;
  }

}

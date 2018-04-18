import { Component, OnInit } from '@angular/core';
import { Person } from '../types/person';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  names= new Array<Person>();
  constructor() { }

  ngOnInit() {
    /*this.names.push({name: 'German Romero', age:30});
    this.names.push({name: 'Elizabeth Quintana', age:33});
    this.names.push({name: 'Derek Romero',  age:7});*/
    /*let yo:Person= new Person();
    yo.name='German Romero';
    yo.age= 23;*/

    //this.names.push(yo);
    //let m:Person= new Person();
    this.names.push(new Person('German Romero', 3));
    this.names.push(new Person('Elizabeth Quintana', 33));
    this.names.push(new Person('Derek Romero', 7));


  }


}

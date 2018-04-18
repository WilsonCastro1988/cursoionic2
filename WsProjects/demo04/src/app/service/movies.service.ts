import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class MoviesService {

  private headers= new HttpHeaders({'Content-Type': 'aplication/jason'}) ;
  id: number;

  constructor(private http:HttpClient) { }

  getAll(): Promise<Object[]> {
    return this.http.get('http://127.0.0.1:3000/movies/')
      .toPromise()
      .then(response => response as Object[]) // el as es un cast, => es una funcion
      //.catch(error => Promise.reject(error));
      .catch(function(error:any){
        console.log(error);
        return null;
      });
  }


  getId(val: number): Promise<Object> {    
    return this.http.get('http://127.0.0.1:3000/movies/' + val)
      .toPromise()
      .then(response => response as Object) // el as es un cast, => es una funcion
      //.catch(error => Promise.reject(error));
      .catch(function(error:any){
        console.log(error);
        return null;
      });
  }

}

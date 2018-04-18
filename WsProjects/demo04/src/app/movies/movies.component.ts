import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../service/movies.service';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  constructor(private moviesService: MoviesService) { }

  movies;

  ngOnInit() {

    this.moviesService.getAll()
      .then( items => this.movies= items)
      .catch( error => console.log(error));
    
  }



}

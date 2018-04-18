import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../service/movies.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  constructor(private moviesService: MoviesService) { }
  movie;
  valId;
  
  ngOnInit() {
  }

  buscar() {
    this.moviesService.getId(this.valId)
      .then( item => this.movie= item)
      .catch( error => console.log(error));
  }

}

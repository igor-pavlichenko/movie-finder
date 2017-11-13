import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MoviesComponent implements OnInit {

  constructor(private movieService: MovieService) {
    console.log('key: ', movieService.apiKey);
  }

  ngOnInit() {
  }

}

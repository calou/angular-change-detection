import { Component } from '@angular/core';
import { BaseComponent } from '../base.component';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
})
export class MovieListComponent extends BaseComponent {
  public movies: Array<Movie> = [];

  constructor(movieService: MovieService) {
    super('movie-list');
    movieService.getMovies().subscribe((movies) => (this.movies = movies));
  }
}

import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  BehaviorSubject,
  combineLatest,
  debounceTime,
  distinctUntilChanged,
  map,
  Observable,
  tap,
} from 'rxjs';
import { BaseComponent } from '../base.component';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MovieListComponent extends BaseComponent {
  public movies$?: Observable<Array<Movie>>;
  public filter$ = new BehaviorSubject<string | undefined>('');
  public filteredMovies: Array<Movie> = [];

  constructor(private readonly _movieService: MovieService) {
    super('movie-list');
    this.movies$ = combineLatest(
      this._movieService.getMovies(),
      this.filter$.pipe(distinctUntilChanged(), debounceTime(500))
    ).pipe(
      tap((_) => console.log('Changed obs')),
      map(([movies, filterValue]) => this.apply_filter(movies, filterValue))
    );
  }

  filter(value: string) {
    this.filter$.next(value);
  }

  apply_filter(movies: Movie[], filterValue?: string): Array<Movie> {
    if (!filterValue || !movies) {
      return movies;
    }
    return movies.filter(
      (movie) => movie.title.toLowerCase().indexOf(filterValue) > -1
    );
  }

  trackByTitle(_: number, movie: Movie): string {
    return movie?.title;
  }
}

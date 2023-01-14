import { Component, Input } from '@angular/core';
import { BaseComponent } from '../base.component';
import { Movie } from '../movie';
import { SelectedMovieService } from '../selected-movie.service';

@Component({
  selector: 'app-movie-list-item',
  templateUrl: './movie-list-item.component.html',
  styleUrls: ['./movie-list-item.component.scss'],
})
export class MovieListItemComponent extends BaseComponent {
  @Input()
  public movie: Movie = {} as Movie;

  constructor(private readonly _selectedMovieService: SelectedMovieService) {
    super('movie-list-item');
  }

  public click(): void {
    this._selectedMovieService.selection = this.movie;
  }
}

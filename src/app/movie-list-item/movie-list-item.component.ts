import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { BaseComponent } from '../base.component';
import { Movie } from '../movie';
import { SelectedMovieService } from '../selected-movie.service';

@Component({
  selector: 'app-movie-list-item',
  templateUrl: './movie-list-item.component.html',
  styleUrls: ['./movie-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MovieListItemComponent extends BaseComponent {
  @Input()
  public movie?: Movie;

  private static ITEM_INDEX = 0;

  constructor(private readonly _selectedMovieService: SelectedMovieService) {
    super(`movie-list-item-${MovieListItemComponent.ITEM_INDEX}`);
    MovieListItemComponent.ITEM_INDEX += 1;
  }

  public click(): void {
    if (!!this.movie) {
      this._selectedMovieService.setSelection(this.movie);
    }
  }
}

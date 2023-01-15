import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BaseComponent } from '../base.component';
import { SelectedMovieService } from '../selected-movie.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MovieDetailsComponent extends BaseComponent {
  public movie$ = this._selectedMovieService.selection$;

  constructor(private readonly _selectedMovieService: SelectedMovieService) {
    super('movie-details');
  }

  public click(): void {
    this._selectedMovieService.clearSelection();
  }
}

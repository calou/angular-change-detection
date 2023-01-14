import { Component } from '@angular/core';
import { SelectedMovieService } from './selected-movie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-change-detection';

  constructor(private readonly _selectedMovieService: SelectedMovieService) { }

  public get hasSelection(): boolean {
    return this._selectedMovieService.hasSelection;
  }
}

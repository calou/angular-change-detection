import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { SelectedMovieService } from './selected-movie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'angular-change-detection';

  constructor(private readonly _selectedMovieService: SelectedMovieService) { }

  public get hasSelection$(): Observable<boolean> {
    return this._selectedMovieService.hasSelection$;
  }
}

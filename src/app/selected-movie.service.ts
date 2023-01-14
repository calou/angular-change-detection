import { Injectable } from '@angular/core';
import { Movie } from './movie';

@Injectable({
  providedIn: 'root',
})
export class SelectedMovieService {
  public selection: Movie | undefined;

  constructor() { }

  public get hasSelection(): boolean {
    return !!this.selection;
  }
}

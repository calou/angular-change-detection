import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Movie } from './movie';

@Injectable({
  providedIn: 'root',
})
export class SelectedMovieService {
  public selection$ = new BehaviorSubject<Movie | undefined>(undefined);

  public hasSelection$: Observable<boolean>;

  constructor() {
    this.hasSelection$ = this.selection$.pipe(map((movie) => !!movie));
  }

  public clearSelection(): void {
    this.selection$.next(undefined);
  }

  public setSelection(movie: Movie): void {
    this.selection$.next(movie);
  }
}

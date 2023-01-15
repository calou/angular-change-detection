import { HttpClient } from '@angular/common/http';
import { Injectable, NgZone } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from './movie';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(
    private readonly _http: HttpClient,
    private readonly _zone: NgZone
  ) { }

  public getMovies(): Observable<Array<Movie>> {
    return this._zone.runOutsideAngular(() =>
      this._http.get<Array<Movie>>('assets/movies.json')
    );
  }
}

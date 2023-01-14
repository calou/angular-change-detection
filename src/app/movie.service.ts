import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from './movie';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private readonly _http: HttpClient) { }

  public getMovies(): Observable<Array<Movie>> {
    return this._http.get<Array<Movie>>('assets/movies.json');
  }
}

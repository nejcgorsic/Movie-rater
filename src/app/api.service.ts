import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Movie} from './models/Movie';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // API connection
  baseUrl = 'http://127.0.0.1:8000/api/movies/';
  headers = new HttpHeaders({
    'Content-type': 'application/json',
    Authorization: 'Token f74366d09c7db645f83745f3288404d637e7c56d'
  });

  private movies = ['Teerminator', 'predator'];

  constructor(
    private httpClient: HttpClient
  ) {
  }

  getMovies() {
    return this.httpClient.get<Movie[]>(this.baseUrl, {
      headers: this.headers
    });
  }

  getMovie(id: number) {
    return this.httpClient.get<Movie>(`${this.baseUrl}${id}/`, {
      headers: this.headers
    });
  }


  rateMovie(rate: number, movieId: number) {
    const body = JSON.stringify({stars: rate});
    return this.httpClient.post(`${this.baseUrl}${movieId}/rate_movie/`, body, {
      headers: this.headers
    });
  }

}

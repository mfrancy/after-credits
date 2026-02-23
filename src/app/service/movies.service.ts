import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ApiMovie, ApiMovieResponse } from '../models/movie.model';
import { api_routes } from '../../core/config/api.config';
import { environment } from '../../environments/environments';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private http = inject(HttpClient);

  getPopular() {
    return this.http.get<ApiMovieResponse<ApiMovie>>(api_routes.getMoviePopular.baseUrl, {
      headers: {
        Authorization: `Bearer ${environment.accessToken}`,
        accept: 'application/json'
      }
    }).pipe(map(response => response.results.map(apiMovie => ({
        id: apiMovie.id,
        title: apiMovie.title,
        posterUrl: `https://image.tmdb.org/t/p/w500${apiMovie.poster_path}`,
        releaseDate: apiMovie.release_date,
        rating: apiMovie.vote_average
    }))));
  }

  
}


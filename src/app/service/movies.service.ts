import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ApiMovie, ApiMovieResponse } from '../models/movie.model';
import { api_routes } from '../../core/config/api.config';
import { environment } from '../../environments/environments';

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
      },
    });
  }

  
}


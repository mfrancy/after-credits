import { Component, EventEmitter, inject, Input, NgZone, OnInit, Output } from '@angular/core';
import { Banner } from '../../components/banner/banner';
import { WinnerSearch } from '../../components/winner-search/winner-search';
import { WinnerResult } from '../../components/winner-result/winner-result';
import { MoviesService } from '../../service/movies.service';
import { Movie } from '../../models/movie.model';
import { MovieSection } from '../../components/movie-section/movie-section';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [Banner, MovieSection, AsyncPipe],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {
  private moviesService = inject(MoviesService);

  popularMovies$ = this.moviesService.getPopular();

  upcomingMovies$ = this.moviesService.getUpcoming();


}

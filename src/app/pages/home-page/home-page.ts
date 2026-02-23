import { Component, EventEmitter, inject, Input, OnInit } from '@angular/core';
import { Banner } from '../../components/banner/banner';
import { WinnerSearch } from '../../components/winner-search/winner-search';
import { WinnerResult } from '../../components/winner-result/winner-result';
import { MovieCard } from '../../components/movie-card/movie-card';
import { MoviesService } from '../../service/movies.service';

@Component({
  selector: 'app-home-page',
  imports: [Banner, WinnerSearch, WinnerResult, MovieCard],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage implements OnInit {
  @Input() searchSubmitted = new EventEmitter<string>();

  private moviesService = inject(MoviesService);

  handleSearchWinner: string = '';

  handleSearch(event: string) {
    this.handleSearchWinner = event;
    console.log(this.handleSearchWinner);
  }

  ngOnInit(): void {
    this.moviesService.getPopular().subscribe((res) => {
      console.log(res);
    });
  }
}

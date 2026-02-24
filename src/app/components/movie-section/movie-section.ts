import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Movie } from '../../models/movie.model';
import { MovieCard } from "../movie-card/movie-card";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movie-section',
  standalone: true,
  imports: [MovieCard, CommonModule],
  templateUrl: './movie-section.html',
  styleUrl: './movie-section.css',
})
export class MovieSection {
  @Input() movies: Movie[] = []

  visibleCount: number = 5

  
  public get movieGrid() {
    return this.movies.slice(0, this.visibleCount)
  }
  
  

}

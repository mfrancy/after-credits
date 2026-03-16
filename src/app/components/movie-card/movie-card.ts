import { Component, Input } from '@angular/core';
import { Movie } from '../../models/movie.model';
import { CardModule } from 'primeng/card';
import { TooltipModule } from 'primeng/tooltip';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-movie-card',
  imports: [CardModule, TooltipModule, RouterLink],
  templateUrl: './movie-card.html',
  styleUrl: './movie-card.css',
})
export class MovieCard {
@Input() movie!: Movie;
}

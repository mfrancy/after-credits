import { Component } from '@angular/core';
import { TagModule } from 'primeng/tag';
import { Button } from "primeng/button";

@Component({
  selector: 'app-article-hero-section',
  imports: [TagModule, Button],
  templateUrl: './article-hero-section.html',
  styleUrl: './article-hero-section.css',
})
export class ArticleHeroSection {

}

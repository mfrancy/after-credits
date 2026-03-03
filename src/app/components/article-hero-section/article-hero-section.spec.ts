import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleHeroSection } from './article-hero-section';

describe('ArticleHeroSection', () => {
  let component: ArticleHeroSection;
  let fixture: ComponentFixture<ArticleHeroSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArticleHeroSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticleHeroSection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

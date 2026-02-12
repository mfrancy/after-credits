import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WinnerSearch } from './winner-search';

describe('WinnerSearch', () => {
  let component: WinnerSearch;
  let fixture: ComponentFixture<WinnerSearch>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WinnerSearch]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WinnerSearch);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

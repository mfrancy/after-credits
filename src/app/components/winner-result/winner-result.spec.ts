import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WinnerResult } from './winner-result';

describe('WinnerResult', () => {
  let component: WinnerResult;
  let fixture: ComponentFixture<WinnerResult>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WinnerResult]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WinnerResult);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

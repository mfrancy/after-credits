import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-winner-result',
  imports: [],
  templateUrl: './winner-result.html',
  styleUrl: './winner-result.css',
})
export class WinnerResult {
  
@Input() query: string = '';
  
}

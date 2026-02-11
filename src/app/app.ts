import { Component, signal } from '@angular/core';
import { Button } from "./components/button/button";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Button],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('quem-ganhou-web');
}

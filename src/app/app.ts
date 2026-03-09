import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { VerseComponent } from './verse/verse.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, VerseComponent,CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Bible');
}

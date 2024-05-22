import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CountrySelectorComponent } from 'ngc-form-controls';
import { NavComponent } from './common/nav/nav.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavComponent,
    CountrySelectorComponent,
    RouterOutlet,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'library-test';
}

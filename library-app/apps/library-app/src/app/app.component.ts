import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { NgcFormControlsComponent } from '@cherryapp/form-controls';

@Component({
  standalone: true,
  imports: [
    NgcFormControlsComponent,
    NxWelcomeComponent,
    RouterModule,
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'library-app';
}

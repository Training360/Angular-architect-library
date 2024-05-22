import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ConfigService } from '../../service/config.service';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [
    RouterModule,
    NgForOf,
  ],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  config = inject(ConfigService);

  links = this.config.navLinks;
}

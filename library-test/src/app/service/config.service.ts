import { Injectable } from '@angular/core';
import { Link } from '../model/link';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  navLinks: Link[] = [
    { text: 'Home', url: '/' },
    { text: 'Users', url: '/user' },
    // { text: 'User Editor', url: '/user-editor' }
  ];

  constructor() { }
}

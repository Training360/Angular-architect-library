import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./page/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'user',
    loadComponent: () => import('./page/user/user.component').then((m) => m.UserComponent),
  },
  {
    path: 'user-editor/:id',
    loadComponent: () => import('./page/user-editor/user-editor.component').then((m) => m.UserEditorComponent),
  },
  {
    path: '**',
    redirectTo: '',
  },
];

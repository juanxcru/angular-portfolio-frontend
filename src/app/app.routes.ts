import { Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';

export const routes: Routes = [
  {path: '**', redirectTo: 'home' },
  {
    path: 'home',
    component: LandingComponent
  },
  {
     path: '**', redirectTo: 'home'
  }
];

import { Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';

export const routes: Routes = [
  {path: '**', redirectTo: 'v2' },
  {
    path: 'v2',
    component: 
  }
  {
    path: 'home',
    component: LandingComponent
  }
];

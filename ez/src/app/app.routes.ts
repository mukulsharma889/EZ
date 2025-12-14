import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  {
    path: 'auth',
    component: LoginComponent,
  },
  {
    path: '',
    component: HomeComponent,
  },
];

import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { CountryDetail } from './pages/country-detail/country-detail';
import { NotFoundComponent } from './pages/not-found/not-found';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {path: 'detail/:name', component: CountryDetail},
  {path: '**', component: NotFoundComponent}
];
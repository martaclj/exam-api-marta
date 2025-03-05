import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductoViewComponent } from './pages/producto-view/producto-view.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'producto/:_id', component: ProductoViewComponent },
  { path: '**', redirectTo: 'home' }
];

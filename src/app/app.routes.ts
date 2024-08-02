import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NickdenningartComponent } from './pages/projects/nickdenningart/nickdenningart.component';

export const routes: Routes = [
    { path: 'art', component: NickdenningartComponent},
    { path: '**', component: HomeComponent }
];

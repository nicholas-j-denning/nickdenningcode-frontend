import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NickdenningartComponent } from './pages/projects/nickdenningart/nickdenningart.component';
import { NullsetComponent } from './pages/projects/nullset/nullset.component';

export const routes: Routes = [
    { path: 'art', component: NickdenningartComponent},
    { path: 'nullset', component: NullsetComponent},
    { path: '**', component: HomeComponent }
];

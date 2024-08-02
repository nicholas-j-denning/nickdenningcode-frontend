import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NickdenningartComponent } from './pages/projects/nickdenningart/nickdenningart.component';
import { ComputerhelpComponent } from './pages/services/computerhelp/computerhelp.component';
import { WebdevelopmentComponent } from './pages/services/webdevelopment/webdevelopment.component';

export const routes: Routes = [
    { path: 'art', component: NickdenningartComponent},
    { path: 'computerhelp', component: ComputerhelpComponent},
    { path: 'webdev', component: WebdevelopmentComponent},
    { path: '**', component: HomeComponent }
];

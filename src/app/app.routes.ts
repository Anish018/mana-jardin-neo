import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DiscoverJardinNeoComponent } from './discover-jardin-neo/discover-jardin-neo.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'discover-jardin-neo', component: DiscoverJardinNeoComponent }
];

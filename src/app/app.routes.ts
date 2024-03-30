import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DiscoverJardinNeoComponent } from './discover-jardin-neo/discover-jardin-neo.component';
import { BlogsMainComponent } from './blogs/blogs-main/blogs-main.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'blog', component: BlogsMainComponent },
    { path: 'discover-jardin-neo', component: DiscoverJardinNeoComponent }
];

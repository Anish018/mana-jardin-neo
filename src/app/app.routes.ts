import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DiscoverJardinNeoComponent } from './discover-jardin-neo/discover-jardin-neo.component';
import { BlogsMainComponent } from './blogs/blogs-main/blogs-main.component';
import { Blog1Component } from './blogs/blog1/blog1.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'blog', component: BlogsMainComponent },
    { path: 'blog1', component: Blog1Component },
    { path: 'discover-jardin-neo', component: DiscoverJardinNeoComponent }
];

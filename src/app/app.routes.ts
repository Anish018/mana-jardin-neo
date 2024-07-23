import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DiscoverJardinNeoComponent } from './discover-jardin-neo/discover-jardin-neo.component';
import { BlogsMainComponent } from './blogs/blogs-main/blogs-main.component';
import { Blog1Component } from './blogs/blog1/blog1.component';
import { Blog2Component } from './blogs/blog2/blog2.component';
import { Blog3Component } from './blogs/blog3/blog3.component';
import { Blog4Component } from './blogs/blog4/blog4.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { BuyersGuideComponent } from './buyers-guide/buyers-guide.component';
import { VrComponent } from './vr/vr.component';
import { PlansComponent } from './plans/plans.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'blog', component: BlogsMainComponent },
    { path: 'blog/blog1', component: Blog1Component },
    { path: 'blog/blog2', component: Blog2Component },
    { path: 'blog/blog3', component: Blog3Component },
    { path: 'blog/blog4', component: Blog4Component },
    { path: 'about-us', component: AboutUsComponent },
    { path: 'contact-us', component: ContactPageComponent },
    { path: 'buyers-guide', component: BuyersGuideComponent },
    { path: 'discover-jardin-neo', component: DiscoverJardinNeoComponent },
    { path: 'vr', component: VrComponent },
    { path: 'plans', component: PlansComponent }
];

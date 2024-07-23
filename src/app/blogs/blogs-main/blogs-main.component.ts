import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { filter } from 'rxjs/operators';

import { FooterComponent } from '../../footer/footer.component';
import { Blog1Component } from '../blog1/blog1.component';
import { Blog2Component } from '../blog2/blog2.component';
import { Blog3Component } from '../blog3/blog3.component';
import { Blog4Component } from '../blog4/blog4.component';

@Component({
  selector: 'app-blogs-main',
  standalone: true,
  imports: [
    FooterComponent,
    Blog1Component,
    Blog2Component,
    Blog3Component,
    Blog4Component
  ],
  templateUrl: './blogs-main.component.html',
  styleUrls: ['./blogs-main.component.scss']
})
export class BlogsMainComponent {

  constructor(private router: Router, private viewportScroller: ViewportScroller) {
    // Listen for navigation end events
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      // Scroll to the top of the page after navigating
      this.viewportScroller.scrollToPosition([0,0]);
    });
  }

  navigateToBlog(blogId: number) {
    switch (blogId) {
      case 1:
        this.router.navigate(['/blog/blog1']);
        break;
      case 2:
        this.router.navigate(['/blog/blog2']);
        break;
      case 3:
        this.router.navigate(['/blog/blog3']);
        break;
      case 4:
        this.router.navigate(['/blog/blog4']);
        break;
      default:
        // Optionally handle the case where the blogId doesn't match
        console.warn('Invalid blogId');
    }
  }
}

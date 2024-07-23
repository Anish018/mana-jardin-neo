import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Import Router

@Component({
  selector: 'app-blog4',
  standalone: true,
  imports: [],
  templateUrl: './blog4.component.html',
  styleUrl: './blog4.component.scss'
})
export class Blog4Component {
  constructor(private router: Router) {} // Inject Router

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
          default:
              console.warn('Invalid blogId');
              break;
      }
  }
}

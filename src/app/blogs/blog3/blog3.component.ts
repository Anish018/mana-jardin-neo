import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Import Router

@Component({
  selector: 'app-blog3',
  standalone: true,
  imports: [],
  templateUrl: './blog3.component.html',
  styleUrl: './blog3.component.scss'
})
export class Blog3Component {
  constructor(private router: Router) {} // Inject Router

  navigateToBlog(blogId: number) {
      switch (blogId) {
          case 1:
              this.router.navigate(['/blog/blog1']);
              break;
          case 2:
              this.router.navigate(['/blog/blog2']);
              break;
          case 4:
              this.router.navigate(['/blog/blog4']);
              break;
          default:
              console.warn('Invalid blogId');
              break;
      }
  }

}

import { Component } from '@angular/core';
import { FooterComponent } from '../../footer/footer.component';
import { Router } from '@angular/router'; // Import Router

@Component({
  selector: 'app-blog2',
  standalone: true,
  imports: [FooterComponent
  ],
  templateUrl: './blog2.component.html',
  styleUrls: ['./blog2.component.scss']
})
export class Blog2Component {
  constructor(private router: Router) {} // Inject Router

  navigateToBlog(blogId: number) {
      switch (blogId) {
          case 1:
              this.router.navigate(['/blog/blog1']);
              break;
          case 3:
              this.router.navigate(['/blog/blog3']);
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

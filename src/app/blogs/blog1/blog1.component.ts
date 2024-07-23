import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Import Router
import { FooterComponent } from '../../footer/footer.component';
@Component({
  selector: 'app-blog1',
  standalone: true,
  imports: [
    FooterComponent
  ],
  templateUrl: './blog1.component.html',
  styleUrls: ['./blog1.component.scss'] // Corrected styleUrl to styleUrls
})
export class Blog1Component {
    constructor(private router: Router) {} // Inject Router

    navigateToBlog(blogId: number) {
        switch (blogId) {
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
                console.warn('Invalid blogId');
                break;
        }
    }
}

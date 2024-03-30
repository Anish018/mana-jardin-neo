import { Component } from '@angular/core';
import { FooterComponent } from '../../footer/footer.component';

@Component({
  selector: 'app-blogs-main',
  standalone: true,
  imports: [FooterComponent],
  templateUrl: './blogs-main.component.html',
  styleUrl: './blogs-main.component.scss'
})
export class BlogsMainComponent {

}

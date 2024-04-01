import { Component } from '@angular/core';
import { ContactUsComponent } from '../contact-us/contact-us.component';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [ContactUsComponent],
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.scss'
})
export class ContactPageComponent {

}

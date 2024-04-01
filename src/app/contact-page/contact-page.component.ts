import { Component } from '@angular/core';
import { ContactUsComponent } from '../contact-us/contact-us.component';
import { FooterComponent } from '../footer/footer.component';
@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [ContactUsComponent ,FooterComponent],
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.scss'
})
export class ContactPageComponent {

}

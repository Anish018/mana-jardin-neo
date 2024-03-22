import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { HomeSection1Component } from '../home-sections/home-section-1/home-section-1.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, HomeSection1Component],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
   
}

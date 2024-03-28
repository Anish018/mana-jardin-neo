import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { HomeSection1Component } from '../home-sections/home-section-1/home-section-1.component';
import { Meta, Title } from '@angular/platform-browser';
import { HomeSection2Component } from '../home-sections/home-section-2/home-section-2.component';
import { HomeSection3Component } from '../home-sections/home-section-3/home-section-3.component';
import { HomeSection4Component } from '../home-sections/home-section-4/home-section-4.component';
import { HomeSection5Component } from '../home-sections/home-section-5/home-section-5.component';
import { HomeSection6Component } from '../home-sections/home-section-6/home-section-6.component';
import { HomeSection7Component } from '../home-sections/home-section-7/home-section-7.component';
import { HomeSection8Component } from '../home-sections/home-section-8/home-section-8.component';
import { HomeSection9Component } from '../home-sections/home-section-9/home-section-9.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    HomeSection1Component,
    HomeSection2Component,
    HomeSection3Component,
    HomeSection4Component,
    HomeSection5Component,
    HomeSection6Component,
    HomeSection7Component,
    HomeSection8Component,
    HomeSection9Component,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(private meta: Meta, private title: Title) {}
}

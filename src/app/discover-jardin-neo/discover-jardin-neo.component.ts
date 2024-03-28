import { Component } from '@angular/core';
import { DiscoverJardinNeoSection1Component } from '../discover-jardin-neo-sections/discover-jardin-neo-section-1/discover-jardin-neo-section-1.component';
import { DiscoverJardinNeoSection2Component } from '../discover-jardin-neo-sections/discover-jardin-neo-section-2/discover-jardin-neo-section-2.component';
import { DiscoverJardinNeoSection3Component } from '../discover-jardin-neo-sections/discover-jardin-neo-section-3/discover-jardin-neo-section-3.component';
import { HeaderComponent } from '../header/header.component';
@Component({
  selector: 'app-discover-jardin-neo',
  standalone: true,
  imports: [
    DiscoverJardinNeoSection1Component,
    DiscoverJardinNeoSection2Component,
    DiscoverJardinNeoSection3Component,
    HeaderComponent,
  ],
  templateUrl: './discover-jardin-neo.component.html',
  styleUrl: './discover-jardin-neo.component.scss'
})
export class DiscoverJardinNeoComponent {

}

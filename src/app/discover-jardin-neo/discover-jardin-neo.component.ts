import { Component } from '@angular/core';
import { DiscoverJardinNeoSection1Component } from '../discover-jardin-neo-sections/discover-jardin-neo-section-1/discover-jardin-neo-section-1.component';
import { DiscoverJardinNeoSection2Component } from '../discover-jardin-neo-sections/discover-jardin-neo-section-2/discover-jardin-neo-section-2.component';
import { DiscoverJardinNeoSection3Component } from '../discover-jardin-neo-sections/discover-jardin-neo-section-3/discover-jardin-neo-section-3.component';
import { DiscoverJardinNeoSection4Component } from '../discover-jardin-neo-sections/discover-jardin-neo-section-4/discover-jardin-neo-section-4.component';
import { DiscoverJardinNeoSection5Component } from '../discover-jardin-neo-sections/discover-jardin-neo-section-5/discover-jardin-neo-section-5.component';
import { DiscoverJardinNeoSection6Component } from '../discover-jardin-neo-sections/discover-jardin-neo-section-6/discover-jardin-neo-section-6.component';
import { DiscoverJardinNeoSection7Component } from '../discover-jardin-neo-sections/discover-jardin-neo-section-7/discover-jardin-neo-section-7.component';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
@Component({
  selector: 'app-discover-jardin-neo',
  standalone: true,
  imports: [
    DiscoverJardinNeoSection1Component,
    DiscoverJardinNeoSection2Component,
    DiscoverJardinNeoSection3Component,
    DiscoverJardinNeoSection4Component,
    DiscoverJardinNeoSection5Component,
    DiscoverJardinNeoSection6Component,
    DiscoverJardinNeoSection7Component,
    HeaderComponent,
    FooterComponent
  ],
  templateUrl: './discover-jardin-neo.component.html',
  styleUrl: './discover-jardin-neo.component.scss'
})
export class DiscoverJardinNeoComponent {

}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-discover-jardin-neo-section-5',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './discover-jardin-neo-section-5.component.html',
  styleUrls: ['./discover-jardin-neo-section-5.component.scss']
})
export class DiscoverJardinNeoSection5Component {
  selectedTab: string | null = null;

  selectTab(tabName: string): void {
    // Check if the currently selected tab is clicked again, if so, collapse it.
    if (this.selectedTab === tabName) {
      this.selectedTab = null;
    } else {
      this.selectedTab = tabName;
    }
  }
}



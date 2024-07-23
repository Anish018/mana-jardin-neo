import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-buyers-guide',
  standalone: true,
  imports: [FooterComponent , CommonModule],
  templateUrl: './buyers-guide.component.html',
  styleUrl: './buyers-guide.component.scss'
})
export class BuyersGuideComponent {
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

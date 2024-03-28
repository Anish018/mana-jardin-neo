import { Component, ElementRef, ViewChild, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-home-section-8',
  standalone: true,
  imports: [],
  templateUrl: './home-section-8.component.html',
  styleUrls: ['./home-section-8.component.scss']
})
export class HomeSection8Component implements AfterViewInit {
  @ViewChild('featureContentContainer') featureContentContainer!: ElementRef<HTMLDivElement>;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.observeAndAnimate();
    }
  }

  private observeAndAnimate() {
    // No need to check for 'window' here as we already know it's platform browser
    const options = {
      root: null,
      threshold: 0.1,
      rootMargin: "0px"
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.startCounting();
          observer.unobserve(entry.target);
        }
      });
    }, options);

    observer.observe(this.featureContentContainer.nativeElement);
  }

  private startCounting() {
    const features = this.featureContentContainer.nativeElement.querySelectorAll('.value');
    const duration = 2000; // Fixed total duration of 2 seconds for the animation
  
    features.forEach((feature) => {
      const match = feature.innerHTML.match(/(\d+)([a-zA-Z+]+)/);
      if (match) {
        const endValue = parseInt(match[1], 10);
        const unit = match[2]; // Contains units and the plus sign
        let startValue = 0;
  
        // Calculate total increments needed based on a more frequent update interval
        const updateInterval = 20; // Update every 20 milliseconds for smoother animation
        const totalIncrements = duration / updateInterval;
        const increment = endValue / totalIncrements; // Adjust increment size for smoother transition
        
        const counter = setInterval(() => {
          startValue += increment; // Increment the start value
          if (startValue >= endValue) {
            startValue = endValue; // Correct final value
            clearInterval(counter);
          }
          feature.innerHTML = `${Math.round(startValue)}${unit}`; // Round to avoid decimal values in display
        }, updateInterval); // Use more frequent updates for smoothness
      }
    });
  }
  
  
  
}

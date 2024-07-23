import { Component, ElementRef, ViewChild, AfterViewInit, Inject, PLATFORM_ID, ChangeDetectorRef } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ContactUsComponent } from '../contact-us/contact-us.component';
import { FooterComponent } from '../footer/footer.component';


interface CarouselItem {
  icon: string;
  label: string;
  descriptions: string[];
  imagePath: string;  // Path to the image for each item
}



@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [ContactUsComponent ,FooterComponent , CommonModule],
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements AfterViewInit {
  @ViewChild('carousel', { static: true }) carousel!: ElementRef;

  originalCarouselItems: CarouselItem[] = [
    { icon: 'assets/icons/paint.svg', label: 'Paint' ,descriptions: [
      'Emulsion paint for interiors.',
      'Polished/Enamel painted doors and grills.',
      'Weather coat painting for exteriors'],
      imagePath: 'assets/images/paint.png'},

    { icon: 'assets/icons/bathroom.svg', label: 'Sanitary Fittings' ,descriptions: [
      ' Villeroy & Boch/Kohler/Grohe/American Standard/equivalent make of Cp Fittings and accessories of good quality general range.',
      'Villeroy & Boch/Kohler/Grohe/American Standard/equivalent make sanitary fittings of any white shades in colour.'],
      imagePath: 'assets/images/sanitary.png'},

    { icon: 'assets/icons/power.svg', label: 'Power Backup' ,descriptions: [
      'Generator backup for common area (lifts and other) & complete lighting back up for individual flats.(Kirloskar or equivalent make)'],
      imagePath: 'assets/images/power.png'},

    { icon: 'assets/icons/structure.svg', label: 'Structure', descriptions: [
      'RCC Framed Structure with RCC walls.',
      'Open kitchen concept.',
      'Walls 100mm thick'
    ],
    imagePath: 'assets/images/Project.png'},

    { icon: 'assets/icons/wall.svg', label: 'Wall & Plastering' ,descriptions: [
      'RCC Framed Structure with RCC walls.',
      'External walls are 6” thick & internal walls of 4” thick.',
      'Internal Walls with smooth finish & external walls of sponge finish plastering.'],
      imagePath: 'assets/images/wall.png'},

    { icon: 'assets/icons/electricals.svg', label: 'Electricals' ,descriptions: [
      'Electrical fittings Anchor – Roma/Schneider-Clipsal.',
      'Concealed fire resistant copper wiring (Anchor/Havells).',
      'T.V. & telephone point in living and master bedroom.'],
      imagePath: 'assets/images/electricals.png'},

    { icon: 'assets/icons/flooring.svg', label: 'Flooring' ,descriptions: [
      'Laminated wooden flooring for Master Bedroom.',
      'Vitrified tiles in all rooms.',
      'Designer ceramic tiles in balconies.',
      'Anti-skid ceramic tiles for bathroom floors.',
      'Designer ceramic tiles in toilets.'],
      imagePath: 'assets/images/flooring.png'},

    { icon: 'assets/icons/kitchen.svg', label: 'Kitchen' ,descriptions: [
      'Wash provision in utility.',
      'Two taps and one aquaguard provision'],
      imagePath: 'assets/images/kitchen.png'},

    { icon: 'assets/icons/door.svg', label: 'Door & Window' ,descriptions: [
      'Teak wood frame with teak skin main door.',
      'SS coated brass fittings for the main door.',
      'Salwood door frame and flush door for other doors.',
      'SS fittings for other doors.',
      'UPVC windows with grills and mosquito mesh.',
      'UPVC French door for Balcony with Mosquito mesh.',
      'UPVC ventilators (provision for exhaust fan)'],
      imagePath: 'assets/images/door.png'},

    { icon: 'assets/icons/lift.svg', label: 'Lift' ,descriptions: [
      '10 pax and 13 pax capacity lifts.',
      'Kone or equivalent make.'],
      imagePath: 'assets/images/lift.png'},
    // ...additional items
  ];
  carouselItems: CarouselItem[];

  currentItemIndex = 3;
  

  @ViewChild('featureContentContainer') featureContentContainer!: ElementRef<HTMLDivElement>;

  constructor(@Inject(PLATFORM_ID) private platformId: Object, private cdRef: ChangeDetectorRef) { this.carouselItems = [...this.originalCarouselItems, ...this.originalCarouselItems, ...this.originalCarouselItems];
    // Start in the middle of the duplicated items
    this.currentItemIndex = this.originalCarouselItems.length; }
    ngAfterViewInit(): void {
      // Ensure the initially centered item is in view
      this.adjustScroll(true);
    }
  
    navigateCarousel(direction: number): void {
      const numOriginalItems = this.originalCarouselItems.length;
      this.currentItemIndex += direction;
  
      // If we navigate too far, reset to create a seamless loop
      if (this.currentItemIndex >= this.carouselItems.length - numOriginalItems || this.currentItemIndex < numOriginalItems) {
        this.currentItemIndex = numOriginalItems + (this.currentItemIndex % numOriginalItems);
        this.adjustScroll(true);
      } else {
        this.adjustScroll();
      }
    }
  
    adjustScroll(instant: boolean = false): void {
      const carousel = this.carousel.nativeElement;
      const targetItem = carousel.querySelectorAll('.carousel-item')[this.currentItemIndex] as HTMLElement;
      const scrollLeft = targetItem.offsetLeft + (targetItem.offsetWidth / 2) - (carousel.offsetWidth / 2);
      
      if (instant) {
        carousel.scrollLeft = scrollLeft;
      } else {
        carousel.scrollTo({
          left: scrollLeft,
          behavior: 'smooth'
        });
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
  }}
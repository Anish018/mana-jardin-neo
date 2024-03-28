import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent {
  @ViewChild('carousel') carousel!: ElementRef;
  currentSlideIndex: number = 0;
  totalSlides: number;

  constructor() {
    // Assuming the slides are static, you might want to calculate this differently if slides can be dynamically added or removed.
    this.totalSlides = 2; // Set this to the actual number of slides you have
  }

  ngAfterViewInit() {
    // Calculate total number of slides dynamically if needed
    // this.totalSlides = this.carousel.nativeElement.querySelectorAll('.slide').length;
  }

  onNavigate(direction: 'left' | 'right') {
    if (direction === 'right' && this.currentSlideIndex < this.totalSlides - 1) {
      this.currentSlideIndex++;
    } else if (direction === 'left' && this.currentSlideIndex > 0) {
      this.currentSlideIndex--;
    }
    this.scrollToCurrentSlide();
  }

  scrollToCurrentSlide() {
    const slideWidth = this.carousel.nativeElement.offsetWidth;
    this.carousel.nativeElement.scrollLeft = slideWidth * this.currentSlideIndex;
  }

  isAtStart() {
    return this.currentSlideIndex === 0;
  }

  isAtEnd() {
    return this.currentSlideIndex === this.totalSlides - 1;
  }
}
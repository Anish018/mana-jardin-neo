import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollHorizontalDirective } from '../../scroll-horizontal.directive';

export interface Slide {
  imgSrc: string;
  imgAlt: string;
}

@Component({
  selector: 'app-home-section-5',
  standalone: true,
  imports: [CommonModule, ScrollHorizontalDirective],
  templateUrl: './home-section-5.component.html',
  styleUrls: ['./home-section-5.component.scss']
})
export class HomeSection5Component implements OnInit {
  @ViewChild('slider') slider!: ElementRef<HTMLDivElement>;
  @ViewChild('carousel', { static: true }) carousel!: ElementRef<HTMLDivElement>;
  selectedIndex = 0;
  images: Slide[] = [
    { imgSrc: '../../../assets/images/BG.png', imgAlt: 'Image 1 ' },
    { imgSrc: '../../../assets/images/about-us.png', imgAlt: 'Image 2 ' },
    { imgSrc: '../../../assets/images/BG.png', imgAlt: 'Image 3 ' },
    { imgSrc: '../../../assets/images/about-us.png', imgAlt: 'Image 2 ' },

    // Add more images as needed
  ];

  isDragging = false;
  startX = 0;
  private moveListener: (() => void) | null = null;

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {}
  showPrev(): void {
    this.selectedIndex = this.selectedIndex > 0 ? this.selectedIndex - 1 : this.images.length - 1;
    this.scrollToSelectedIndex();
  }

  showNext(): void {
    this.selectedIndex = this.selectedIndex < this.images.length - 1 ? this.selectedIndex + 1 : 0;
    this.scrollToSelectedIndex();
  }

  scrollToSelectedIndex(): void {
    const carouselNativeElement = this.carousel.nativeElement;
    const selectedItemElement = carouselNativeElement.children[this.selectedIndex] as HTMLElement;
    carouselNativeElement.scrollLeft = selectedItemElement.offsetLeft - carouselNativeElement.offsetLeft;
  }
  onScroll(): void {
    const carouselElement = this.carousel.nativeElement;
    const scrollPosition = carouselElement.scrollLeft + carouselElement.offsetWidth / 2;
    const slides = carouselElement.querySelectorAll('.slider-item') as NodeListOf<HTMLElement>;

    let cumulativeWidth = 0;
    for (let i = 0; i < slides.length; i++) {
      cumulativeWidth += slides[i].offsetWidth;
      if (cumulativeWidth >= scrollPosition) {
        this.selectedIndex = i;
        break;
      }
    }
  }

  

  ngAfterViewInit() {
    this.renderer.listen(this.slider.nativeElement, 'mousedown', this.onMouseDown);
    // Note that we are not adding a 'mousemove' listener here
  }

  onMouseDown = (event: MouseEvent) => {
    this.isDragging = true;
    this.startX = event.clientX;
    event.preventDefault();
    // Add 'mousemove' listener and keep a reference to the remover function
    this.moveListener = this.renderer.listen('document', 'mousemove', this.onMouseMove);
  };

  onMouseMove = (event: MouseEvent) => {
    if (this.isDragging) {
      const currentX = event.clientX;
      const diffX = currentX - this.startX;

      if (diffX > 200) {
        this.showPrev();
        this.isDragging = false;
        this.removeMouseMoveListener();
      } else if (diffX < -200) {
        this.showNext();
        this.isDragging = false;
        this.removeMouseMoveListener();
      }
    }
  };

  onMouseUp = () => {
    this.isDragging = false;
    this.removeMouseMoveListener();
  };

  removeMouseMoveListener() {
    if (this.moveListener) {
      this.moveListener(); // Removes 'mousemove' listener
      this.moveListener = null;
    }
  }

  onTouchStart(event: TouchEvent) {
    this.isDragging = true;
    this.startX = event.touches[0].clientX;
  }

  onTouchEnd(event: TouchEvent) {
    if (!this.isDragging) return;
    
    const endX = event.changedTouches[0].clientX;
    const diffX = endX - this.startX;
    
    if (diffX > 30) {
      this.showPrev();
    } else if (diffX < -30) {
      this.showNext();
    }
    this.isDragging = false;
  }

  // showPrev() {
  //   if (this.selectedIndex > 0) {
  //     this.selectedIndex--;
  //   } else {
  //     this.selectedIndex = this.images.length - 1;
  //   }
  // }

  // showNext() {
  //   if (this.selectedIndex < this.images.length - 1) {
  //     this.selectedIndex++;
  //   } else {
  //     this.selectedIndex = 0;
  //   }
  // }
}
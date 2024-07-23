import { Injectable, EventEmitter } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class SharedService {
  scrollToSlideEvent = new EventEmitter<number>();
  closeDialogEmitter = new EventEmitter<void>(); // Add this line

  constructor() {}
  
  changeSlide(index: number) {
    console.log(`Change slide event emitted for index: ${index}`);
    this.scrollToSlideEvent.emit(index);
  }

  closeDialog() {
    console.log('Dialog close event emitted');
    this.closeDialogEmitter.emit(); // Add this method
  }
}
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-section-7',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-section-7.component.html',
  styleUrl: './home-section-7.component.scss',
})
export class HomeSection7Component {
  tiles = [
    {
      userDP:
        'https://i.pinimg.com/564x/ba/92/7f/ba927ff34cd961ce2c184d47e8ead9f6.jpg',
      userName: 'Uchit Pulao',
      userReview:
        'I have been living here for the past 2 years and I must say that I am very happy with the services provided by the management. The staff isvery friendly and always ready to help. The amenities are top-notch and the location is perfect. I would definitely recommend this place to anyone looking for a new home.',
    },
    {
      userDP:
        'https://i.pinimg.com/564x/1d/83/a6/1d83a6d88d8be5b041a9a98fd5048311.jpg',
      userName: 'Sandeep Biriyani',
      userReview:
        'It was a great experience living here. The staff is very friendly and always ready to help. The amenities are top-notch and the location is perfect. I would definitely recommend this place to anyone looking for a new home.',
    },
    {
      userDP:
        'https://i0.wp.com/suddenlycat.com/wp-content/uploads/2020/09/SC-Blog-Background-v1-1.jpg?fit=1024%2C654&ssl=1',
      userName: 'Arun Paratha',
      userReview:
        'The best place to live in the city. The staff is very friendly and always ready to help. The amenities are top-notch and the location is perfect. I would definitely recommend this place to anyone looking for a new home.',
    },
  ];
}

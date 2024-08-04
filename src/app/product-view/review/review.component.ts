import { Component } from '@angular/core';

@Component({
  selector: 'app-review',
  standalone: true,
  imports: [],
  templateUrl: './review.component.html',
  styleUrl: './review.component.css',
})
export class ReviewComponent {
  reviews: Array<any> = [
    {
      id: 1,
      userName: 'Ameer Elattar',
      content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit...',
      rate: 4,
      date: new Date('2024-08-01')
    },
    {
      id: 2,
      userName: 'Mohammed Nabil',
      content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit...',
      rate: 3,
      date: new Date('2024-07-30')
    },
    {
      id: 3,
      userName: 'Sara Samir',
      content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit...',
      rate: 2,
      date: new Date('2024-07-25')
    },
    {
      id: 4,
      userName: 'Sameh Elsayed',
      content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit...',
      rate: 5,
      date: new Date('2024-08-03')
    },
    {
      id: 5,
      userName: 'Ahmed Elsayed',
      content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit...',
      rate: 1,
      date: new Date('2024-08-3')
    },
    {
      id: 6,
      userName: 'Omar Ali',
      content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit...',
      rate: 5,
      date: new Date('2024-06-02')
    },
  ];

  sortReviews(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    const value = selectElement.value;

    if (value === 'high') {
      this.reviews = this.reviews.slice().sort((a, b) => b.rate - a.rate);
    } else if (value === 'low') {
      this.reviews = this.reviews.slice().sort((a, b) => a.rate - b.rate);
    } else if (value === 'recent') {
      this.reviews = this.reviews.slice().sort((a, b) => b.date - a.date);
    }
  }
}

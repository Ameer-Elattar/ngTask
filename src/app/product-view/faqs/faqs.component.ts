import { Component } from '@angular/core';

@Component({
  selector: 'app-faqs',
  standalone: true,
  imports: [],
  templateUrl: './faqs.component.html',
  styleUrl: './faqs.component.css',
})
export class FAQSComponent {
  questions: Array<any> = [
    {
      id: 1,
      question: 'What materials are used in the construction of the chair?',
      answer:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam minus, iusto quaerat optio aut minima adipisci ut natus itaque quas, corporis id necessitatibus voluptatibus illo ex. Veniam reiciendis quod ipsum.',
    },
    {
      id: 2,
      question: 'What are the dimensions of the chair?',
      answer:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam minus, iusto quaerat optio aut minima adipisci ut natus itaque quas, corporis id necessitatibus voluptatibus illo ex. Veniam reiciendis quod ipsum.',
    },
    {
      id: 3,
      question: 'Does the chair require assembly?',
      answer:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam minus, iusto quaerat optio aut minima adipisci ut natus itaque quas, corporis id necessitatibus voluptatibus illo ex. Veniam reiciendis quod ipsum.',
    },
    {
      id: 4,
      question: 'How do I clean and maintain the chair?',
      answer:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam minus, iusto quaerat optio aut minima adipisci ut natus itaque quas, corporis id necessitatibus voluptatibus illo ex. Veniam reiciendis quod ipsum.',
    },
  ];
}

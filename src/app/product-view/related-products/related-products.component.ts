import { Component } from '@angular/core';

@Component({
  selector: 'app-related-products',
  standalone: true,
  imports: [],
  templateUrl: './related-products.component.html',
  styleUrl: './related-products.component.css',
})
export class RelatedProductsComponent {
  similarProducts: Array<any> = [
    {
      id: 1,
      productName: 'VINGLI Mid century Chair',
      imageURL:
        'https://m.media-amazon.com/images/I/71H5rdTJ2IL._AC_SX679_.jpg',
      rate: 4,
    },
    {
      id: 2,
      productName: ' Knight Home  Chair',
      imageURL:
        'https://i5.walmartimages.com/seo/Andeworld-Upholstered-Accent-Chair-for-Bedroom-Living-Room-Chairs-Lounge-Chair-with-Wood-Legs-Cream-Fabric_f3c77317-757f-424d-8828-fb7955b80ab8.9015336d68c3ae9c20e855088d6e0eb4.jpeg',
      rate: 2,
    },
    {
      id: 3,
      productName: ' Modern Wingback Chair',
      imageURL:
        'https://m.media-amazon.com/images/I/811sKBEFYxL._AC_SX679_.jpg',
      rate: 1,
    },
    {
      id: 1,
      productName: 'Rosevera Rylee 30 Chair',
      imageURL:
        'https://m.media-amazon.com/images/I/91emD3JBdjL._AC_SX569_.jpg',
      rate: 4,
    },
  ];
}

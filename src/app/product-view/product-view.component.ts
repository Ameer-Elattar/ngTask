import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ProductInfoComponent } from './product-info/product-info.component';
import { ReviewComponent } from './review/review.component';
import { RelatedProductsComponent } from './related-products/related-products.component';
import { FAQSComponent } from './faqs/faqs.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-product-view',
  standalone: true,
  imports: [
    NavbarComponent,
    CarouselComponent,
    ProductInfoComponent,
    ReviewComponent,
    RelatedProductsComponent,
    FAQSComponent,
    FooterComponent
  ],
  templateUrl: './product-view.component.html',
  styleUrl: './product-view.component.css',
})
export class ProductViewComponent {}

import { Routes } from '@angular/router';
import { ProductViewComponent } from './product-view/product-view.component';

export const routes: Routes = [
  {
    path: '',
    component: ProductViewComponent,
    pathMatch: 'full',
  },
  {
    path: 'product',
    component: ProductViewComponent,
  },
];

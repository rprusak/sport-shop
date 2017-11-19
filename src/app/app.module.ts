import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './components/app/app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeViewComponent } from './components/home-view/home-view.component';
import { CategoriesMenuComponent } from './components/categories-menu/categories-menu.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { PromotionsComponent } from './components/promotions/promotions.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ProductViewComponent } from './components/product-view/product-view.component';
import { CategoryViewComponent } from './components/category-view/category-view.component';
import { CartViewComponent } from './components/cart-view/cart-view.component';
import { ProductsService } from './services/products-service/products.service';
import {CartService} from './services/cart-service/cart.service';
import { CartStatusComponent } from './components/cart-status/cart-status.component';

const appRoutes: Routes = [
  {
    path: 'home',
    component: HomeViewComponent
  },
  {
    path: 'products/:id',
    component: ProductViewComponent
  },
  {
    path: 'category/:category',
    component: CategoryViewComponent
  },
  {
    path: 'cart',
    component: CartViewComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent,
    HomeViewComponent,
    CategoriesMenuComponent,
    CarouselComponent,
    PromotionsComponent,
    PageNotFoundComponent,
    ProductViewComponent,
    CategoryViewComponent,
    CartViewComponent,
    CartStatusComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes
    ),
    HttpClientModule
  ],
  providers: [
    ProductsService,
    CartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

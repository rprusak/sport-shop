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
import { ContactViewComponent } from './components/contact-view/contact-view.component';
import { AboutViewComponent } from './components/about-view/about-view.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ProductViewComponent } from './components/product-view/product-view.component';
import { CategoryViewComponent } from './components/category-view/category-view.component';
import { CartViewComponent } from './components/cart-view/cart-view.component';
import { CategoriesService } from './services/categories/categories.service';

const appRoutes: Routes = [
  {
    path: 'home',
    component: HomeViewComponent
  },
  {
    path: 'contact',
    component: ContactViewComponent
  },
  {
    path: 'about',
    component: AboutViewComponent
  },
  {
    path: 'product',
    component: ProductViewComponent
  },
  {
    path: 'category/:category',
    component: CategoryViewComponent
  },
  {
    path: 'category/:category/subcategory/:subcategory',
    component: CategoryViewComponent
  },
  {
    path: 'cart',
    component: CartViewComponent
  },
  { path: '',
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
    ContactViewComponent,
    AboutViewComponent,
    PageNotFoundComponent,
    ProductViewComponent,
    CategoryViewComponent,
    CartViewComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes
    ),
    HttpClientModule
  ],
  providers: [
    CategoriesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

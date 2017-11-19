import { Injectable } from '@angular/core';
import { Product } from '../../common/product';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class CartService {
  private products: Array<Product> = [];

  constructor() { }

  // Observable string sources
  private productAddedSource = new Subject<Product>();
  private productDeletedSource = new Subject<Product>();

  // Observable string streams
  productAdded = this.productAddedSource.asObservable();
  productDeleted = this.productDeletedSource.asObservable();

  // Service message commands
  addProduct(product: Product) {
    this.products.push(product);
    this.productAddedSource.next(product);
  }

  deleteProduct(product: Product) {
    this.productDeletedSource.next(product);
  }

  clearCart() {
    this.products = [];
    this.productDeletedSource.next(null);
  }

  getAllProducts(): Array<Product> {
    return this.products;
  }
}

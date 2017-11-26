import { Injectable } from '@angular/core';
import { Product } from '../../common/product';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class CartService {
  private products: Map<String, Array<Product>> = new Map<String, Array<Product>>();

  constructor() { }

  // Observable string sources
  private productAddedSource = new Subject<Product>();
  private productDeletedSource = new Subject<Product>();

  // Observable string streams
  productAdded = this.productAddedSource.asObservable();
  productDeleted = this.productDeletedSource.asObservable();

  // Service message commands
  addProduct(product: Product) {
    if (this.products.has(product._id)) {
      const array = this.products.get(product._id);
      array.push(product);
      this.products.set(product._id, array);
    } else {
      const array = [product];
      this.products.set(product._id, array);
    }

    this.productAddedSource.next(product);
  }

  deleteProduct(product: Product) {
    if (this.products.has(product._id)) {
      this.products.delete(product._id);
      this.productDeletedSource.next(product);
    }
  }

  clearCart() {
    this.products = new Map<String, Array<Product>>();
    this.productDeletedSource.next(null);
  }

  getAllProducts(): Map<String, Array<Product>> {
    return this.products;
  }
}

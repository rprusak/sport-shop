import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ProductsService } from '../../services/products/products.service';
import { Product } from '../../common/product';
import { CartService } from '../../services/cart/cart.service';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {
  private product: Product = null;

  constructor(private route: ActivatedRoute, private productsService: ProductsService, private cartService: CartService) { }

  ngOnInit() {
    this.route.paramMap.subscribe((value: ParamMap) => {
      const productId = value.get('id');
      this.productsService.getProductById(productId).subscribe(
        product => {
          this.product = product;
        },
        error => {
          alert(error.message);
        }
      );
    });
  }

  addToCart() {
    this.cartService.addProduct(this.product);
  }
}

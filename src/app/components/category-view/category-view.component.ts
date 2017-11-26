import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { ProductsService } from '../../services/products-service/products.service';
import { Product } from '../../common/product';
import {routerNgProbeToken} from '@angular/router/src/router_module';
import {CartService} from "../../services/cart-service/cart.service";

@Component({
  selector: 'app-category-view',
  templateUrl: './category-view.component.html',
  styleUrls: ['./category-view.component.css']
})
export class CategoryViewComponent implements OnInit {
  categoryName = '';
  products: Array<Product> = [];

  constructor(private route: ActivatedRoute, private router: Router, private productsService: ProductsService,
              private cartService: CartService) { }

  ngOnInit() {
    this.route.paramMap.subscribe((value: ParamMap) => {
      this.categoryName = value.get('category');
      this.productsService.getProductsFromCategory(this.categoryName).subscribe(
        data => {
          this.products = data;
          console.log(this.products);
        },
        error => {
          alert(error.message);
        }
      );
    });
  }
}

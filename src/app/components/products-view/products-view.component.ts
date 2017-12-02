import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Category } from '../../common/category';
import { Product } from '../../common/product';
import { ProductsService } from '../../services/products/products.service';

@Component({
  selector: 'app-products-view',
  templateUrl: './products-view.component.html',
  styleUrls: ['./products-view.component.css']
})
export class ProductsViewComponent implements OnInit {
  products: Array<Product> = [];

  selectedCategories: Array<string> = [];
  productName = null;
  minimumPrice = null;
  maximumPrice = null;
  discounted = null;

  constructor(private route: ActivatedRoute, private productsService: ProductsService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(() => {
      this.route.queryParams.subscribe((params: Params) => {
        console.log(params);
        if (params.hasOwnProperty('category')) {
          this.selectedCategories = params['category'];
        }

        if (params.hasOwnProperty('productName')) {
          this.productName = params['productName'];
        }

        if (params.hasOwnProperty('minimumPrice')) {
          this.minimumPrice = params['minimumPrice'];
        }

        if (params.hasOwnProperty('maximumPrice')) {
          this.maximumPrice = params['maximumPrice'];
        }

        if (params.hasOwnProperty('discounted')) {
          this.discounted = params['discounted'];
        }

        this.getProductsFromService();
      });
    });
  }

  getProductsFromService() {
    this.productsService.getProducts(this.selectedCategories, this.productName, this.minimumPrice, this.maximumPrice,
      this.discounted).subscribe((products) => this.products = products, error => alert(error.message));
  }
}

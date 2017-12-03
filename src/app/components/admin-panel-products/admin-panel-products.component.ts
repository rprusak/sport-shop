import { Component, OnInit } from '@angular/core';
import { Product } from '../../common/product';
import { ProductsService } from '../../services/products/products.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-panel-products',
  templateUrl: './admin-panel-products.component.html',
  styleUrls: ['./admin-panel-products.component.css']
})
export class AdminPanelProductsComponent implements OnInit {
  private products: Array<Product> = [];

  constructor(private productsService: ProductsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(() => {
      this.productsService.getProducts().subscribe(
        (products: Array<Product>) => {
          this.products = products;
        }
      );
    });
  }

  deleteProduct(product: Product) {
    alert("delete product " + product._id);
  }

  editProduct(product: Product) {
    alert("edit product " + product._id);
  }


}

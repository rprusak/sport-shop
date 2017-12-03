import { Component, OnInit } from '@angular/core';
import {Product} from "../../common/product";
import {ProductsService} from "../../services/products/products.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-admin-panel-new-product',
  templateUrl: './admin-panel-new-product.component.html',
  styleUrls: ['./admin-panel-new-product.component.css']
})
export class AdminPanelNewProductComponent implements OnInit {
  private product: Product = {
    _id: '',
    name: null,
    description: null,
    price: null,
    category: null,
    discounted: false,
    discount: 0,
    image: null
};

  constructor(private productsService: ProductsService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    this.productsService.addProduct(this.product).subscribe(
      value => {
        alert("Dodano produkt!");
        this.router.navigate(['/panel']);
      },
      error => {
        console.log(error);
        alert("error");
      }
    );
  }
}

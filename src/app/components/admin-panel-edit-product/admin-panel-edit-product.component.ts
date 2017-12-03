import { Component, OnInit } from '@angular/core';
import { ParamMap, ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products/products.service';
import { Product } from '../../common/product';

@Component({
  selector: 'app-admin-panel-edit-product',
  templateUrl: './admin-panel-edit-product.component.html',
  styleUrls: ['./admin-panel-edit-product.component.css']
})
export class AdminPanelEditProductComponent implements OnInit {
  private product: Product;

  constructor(private productsService: ProductsService, private route: ActivatedRoute) { }

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

  onSubmit() {
    this.productsService.updateProduct(this.product).subscribe(
      value => {
        alert('Zaktualizowana produkt!');

      }, error => {
        alert('Błąd!');
        console.log(error);
      }
    );
  }

}

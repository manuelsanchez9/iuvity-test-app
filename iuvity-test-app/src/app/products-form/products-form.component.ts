import { Component } from '@angular/core';

@Component({
  selector: 'app-products-form',
  templateUrl: './products-form.component.html',
  styleUrls: ['./products-form.component.css']
})
export class ProductsFormComponent {

  product = {
    nameProduct: '',
    sizeProduct: '',
    brandProduct: '',
    priceProduct: 0
  } 

}

import { Component } from '@angular/core';
import axios from 'axios';

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

  save(){
    console.log('product-->', this.product);
    let data = JSON.stringify({
      "name": this.product.nameProduct,
      "size": this.product.sizeProduct,
      "brand": this.product.brandProduct,
      "price": this.product.priceProduct
    });
    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'http://localhost:3000/products',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };
    axios.request(config)
    .then((response: { data: any; }) => {
      console.log(JSON.stringify(response.data));
    })
    .catch((error: any) => {
      console.log(error);
    });    
  }
}

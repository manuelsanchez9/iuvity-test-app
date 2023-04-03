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
    if (this.product.nameProduct === "" || this.product.sizeProduct === "" || this.product.brandProduct === "" || this.product.priceProduct <= 0) {
      alert('Todos los campos son requeridos y el precio no puede ser cero o negativo');
    } else {
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
        alert('Producto Creado')
        this.product.nameProduct = "";
        this.product.brandProduct = "";
        this.product.sizeProduct = "";
        this.product.priceProduct = 0;
      })
      .catch((error: any) => {
        console.log(error);
      }); 
    }       
  }
}

import { Component } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-products-get',
  templateUrl: './products-get.component.html',
  styleUrls: ['./products-get.component.css']
})
export class ProductsGetComponent {
  getProducts(){
    let data = '';
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'http://localhost:3000/products',
      headers: { },
      data : data
    };
    axios.request(config)
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });  
  }
}

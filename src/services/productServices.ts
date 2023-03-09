import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Product } from 'src/modals/product'


@Injectable()
export class ProductService {
  constructor(private http: HttpClient) {}

  getProductsSmall() {
    return this.http
      .get<any>('assets/products-small.json')
      .toPromise()
      .then(res => <Product[]>res.data)
      .then(data => {
        return data
      })
  }
}

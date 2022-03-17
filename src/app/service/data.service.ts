import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private httpClient: HttpClient) {}
  getData() {
    return this.httpClient.get('http://127.0.0.1:8000/api/product');
  }
  insertData(data: any) {
    return this.httpClient.post('http://127.0.0.1:8000/api/product', data);
  }
  deleteData(id: any) {
    return this.httpClient.delete('http://127.0.0.1:8000/api/product/' + id);
  }
  getProductById(id: any) {
    return this.httpClient.get('http://127.0.0.1:8000/api/product/' + id);
  }
  updateProductById(id: any, data: any) {
    return this.httpClient.put('http://127.0.0.1:8000/api/product/' + id, data);
  }
}
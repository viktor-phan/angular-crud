import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/product';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products: any;
  product = new Product();
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.getProductsData();
  }
  getProductsData() {
    this.dataService.getData().subscribe((res) => {
      this.products = res;
    });
  }
  
  deleteData(id: any) {
    this.dataService.deleteData(id).subscribe((res) => {
      alert('Deleted Product id: ' + id);
      this.getProductsData();
    });
  }
}

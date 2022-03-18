import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/product';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-product-new',
  templateUrl: './product-new.component.html',
  styleUrls: ['./product-new.component.css'],
})
export class ProductNewComponent implements OnInit {
  product = new Product();
  constructor(private dataService: DataService, private router: Router) {}
  ngOnInit(): void {}
  insertData() {
    this.dataService.insertData(this.product).subscribe((res) => {
      this.router.navigate(['products']);
    });
  }
}

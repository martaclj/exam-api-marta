import { Component, OnInit, inject } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Iproduct } from '../../interfaces/iproduct';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products: Iproduct[] = [];

  productService = inject(ProductService);

  ngOnInit(): void {
    this.productService.getProducts().subscribe({
      next: (products) => {
        this.products = products;
      },
      error: (err) => {
        console.error("Error al cargar productos:", err);
      }
    });
  }
}

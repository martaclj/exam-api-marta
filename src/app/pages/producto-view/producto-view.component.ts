import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Iproduct } from '../../interfaces/iproduct';

@Component({
  selector: 'app-producto-view',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './producto-view.component.html',
  styleUrls: ['./producto-view.component.css']
})
export class ProductoViewComponent implements OnInit {
  product: Iproduct | null = null;
  private route = inject(ActivatedRoute);
  private productService = inject(ProductService);

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('_id');
    if (id) {
      this.productService.getProductById(id).subscribe(prod => this.product = prod);
    }
  }
}

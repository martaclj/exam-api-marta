import { Component } from '@angular/core';
import { Iproduct } from '../../interfaces/iproduct';
import { Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  @Input() product!: Iproduct;
}

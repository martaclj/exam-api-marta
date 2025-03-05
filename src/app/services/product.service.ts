import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, } from 'rxjs/operators';
import { Iproduct } from '../interfaces/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'https://peticiones.online/api/products';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Iproduct[]> {
    return this.http.get<any>(this.apiUrl).pipe(
      map(response => response.results || response.data || []),
      catchError(() => of([]))
    );
  }

  getProductById(id: string): Observable<Iproduct | null> {
    return this.http.get<Iproduct>(`${this.apiUrl}/${id}`).pipe(
      catchError(() => of(null))
    );
  }
}

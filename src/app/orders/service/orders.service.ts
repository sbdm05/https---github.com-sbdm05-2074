import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from 'src/app/core/models/order';

// decorateur
@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  // accès à toutes les propriétés et méthodes de HttpClient
  // this.http.get('url')
  // this.http.delete('url')

  constructor(private http: HttpClient) {
    console.log('depuis service');
  }

  // créer nouvelle méthode
  public sumUp(a: number, b: number): number {
    return a + b;
  }

  // appel http
  public getDatas(): Observable<Order[]> {
    return this.http.get<Order[]>('http://localhost:4009/orders');
  }
  
}

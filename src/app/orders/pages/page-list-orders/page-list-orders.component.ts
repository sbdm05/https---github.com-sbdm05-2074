import { Component } from '@angular/core';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from '../../service/orders.service';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss'],
})
export class PageListOrdersComponent {
  // public = accessible depuis le template html
  public title: string = 'Page List Orders';

  // créer propriété disponible dans l'html
  public tab!: Order[];

  // créer tableau de headers: string []
  public headers: string[] = [
    'Action',
    'Type',
    'Client',
    'NbJours',
    'Tjm HT',
    'Total HT',
    'Total TTC',
    'Etat',
  ];

  // injecter un service orders
  constructor(private ordersService: OrdersService) {
    console.log(this.ordersService.sumUp(1, 2));

    // déclencher getDatas() du service
    this.ordersService.getDatas().subscribe((data) => {
      this.tab = data;
    });
  }
}

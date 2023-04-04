import { Component } from '@angular/core';
import { OrdersService } from '../../service/orders.service';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss'],
})

export class PageListOrdersComponent {
  // injecter un service orders
  constructor(private ordersService: OrdersService) {
    console.log(this.ordersService.sumUp(1, 2));

    // déclencher getDatas() du service
    this.ordersService.getDatas().subscribe(data => {
      console.log(data);
    });
  }
}

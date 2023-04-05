import { Component } from '@angular/core';
import { ClientsService } from '../../service/clients.service';

@Component({
  selector: 'app-page-list-clients',
  templateUrl: './page-list-clients.component.html',
  styleUrls: ['./page-list-clients.component.scss'],
})
export class PageListClientsComponent {

  public tab!: any
  // constructor + injecter le service Clients
  constructor(private clientsService: ClientsService) {
    // ???? déclencher getDatas()
    this.clientsService.getDatas().subscribe((data) => {
      console.log(data);
      this.tab = data
    });
  }
}

import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { StateOrder } from 'src/app/core/enums/state-order';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from '../../service/orders.service';

@Component({
  selector: 'app-form-order',
  templateUrl: './form-order.component.html',
  styleUrls: ['./form-order.component.scss'],
})
export class FormOrderComponent {
  public form!: FormGroup; // non initialisé

  // convertir l'enum en tableau et le stocker dans stateOrder
  public stateOrder = Object.values(StateOrder);

  // étape : créer un objet de type Order
  public item: Order = new Order();

  // ici on injecte le service OrdersService pour pouvoir déclencher
  // la méthode add()
  constructor(
    private fb: FormBuilder,
    private ordersService: OrdersService,
    private router: Router
  ) {
    
  }

  public onSubmit() {
    console.log(this.form.value);
    // méthode : POST
    // envoyer this.form.value dans la bdd avec la méthode POST
    this.ordersService.add(this.form.value).subscribe((data) => {
      console.log(data);
      // redirection vers page-list-orders
      this.router.navigate(['']);
    });
  }

  // décrire le contenu du form
  // dans un objet, on va créer des propriétés pour chaque input, on donne des valeurs par défaut
  // associer les propriétés aux inputs dans l'HTML
  ngOnInit() {
    this.form = this.fb.group({
      tjmHt: [this.item.tjmHt],
      nbJours: [this.item.nbJours],
      tva: [this.item.tva],
      state: [this.item.state], // OPTION
      typePresta: [this.item.typePresta],
      client: [this.item.client],
      comment: [this.item.comment],
      id: [this.item.id],
    });
  }

  // au clic sur le bouton, la méthode onSubmit() est déclenchée
} // NE RIEN ECRIRE EN DEHORS DE CES ACCOLADES

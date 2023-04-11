import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { StateOrder } from 'src/app/core/enums/state-order';
import { Order } from 'src/app/core/models/order';

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

  constructor(private fb: FormBuilder) {}

  public onSubmit() {
    console.log(this.form.value);
  }

  // décrire le contenu du form
  // dans un objet, on va créer des propriétés pour chaque input, on donne des valeurs par défaut
  // associer les propriétés aux inputs dans l'HTML
  ngOnInit() {
    this.form = this.fb.group({
      tjmHt: [this.item.tjmHt],
      nbJours: [this.item.nbJours],
      tva: [this.item.tva],
      state: [this.item.state],
      typePresta: [this.item.typePresta],
      client: [this.item.client],
      comment: [this.item.comment],
      id: [this.item.id],
    });
  }

  // au clic sur le bouton, la méthode onSubmit() est déclenchée
} // NE RIEN ECRIRE EN DEHORS DE CES ACCOLADES

import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-order',
  templateUrl: './form-order.component.html',
  styleUrls: ['./form-order.component.scss'],
})
export class FormOrderComponent {
  public form!: FormGroup;

  constructor(private fb: FormBuilder) {}

  public onSubmit() {
    console.log(this.form.value);
  }

  // décrire le contenu du form
  // dans un objet, on va créer des propriétés pour chaque input, on donne des valeurs par défaut
  // associer les propriétés aux inputs dans l'HTML
  ngOnInit() {
    this.form = this.fb.group({
      tjmHt: [1],
      nbJours: [1],
      tva: [20],
      state: ['etat'],
      typePresta: ['type de presta'],
      client: ['ici nom client'],
      comment: ['ici commentaire'],
      id: [],
    });
  }

  // au clic sur le bouton, la méthode onSubmit() est déclenchée
} // NE RIEN ECRIRE EN DEHORS DE CES ACCOLADES

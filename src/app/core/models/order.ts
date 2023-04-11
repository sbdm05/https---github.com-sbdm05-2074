import { StateOrder } from '../enums/state-order';
import { OrderI } from '../interfaces/order-i';

export class Order implements OrderI {
  tjmHt = 1200;
  nbJours = 1;
  tva =  20;
  state =  StateOrder.OPTION;
  typePresta!: string;
  client!: string;
  comment!: string;
  id!: number;
  // lister des propriétés et donner des valeurs par défaut
  constructor(obj?: Partial<Order>){
    if(obj){
      // si obj existe, alors on crée un objet
      // méthode javascript
      Object.assign(this, obj)
    }
  }
}

// const newObj = new Order()
// newObj va contenir toutes les propriétés et valeurs par défaut du model Order

// Dans mon application, quand je vais créer un objet de type Order,
// on obtiendra des valeurs par défaut

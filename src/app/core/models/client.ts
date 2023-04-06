import { StateClient } from '../enums/state-client';
import { ClientI } from '../interfaces/client-i';

export class Client implements ClientI {
  state = StateClient.INACTIVE;
  tva: number = 20;
  id!: number;
  name!: string;
  totalCaHt!: number;
  comment!: string;
  constructor(obj?: Partial<Client>) {
    if (obj) {
      // si obj existe, alors on crée un objet
      // méthode javascript
      Object.assign(this, obj);
    }
  }
}


import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ClientsService {
  // injecter HttpClient

  // variable = propriété
  // function = méthode

  constructor(private http : HttpClient) {}

  // appel http vers l'url
  // http://localhost:3000/clients
  // avant d'écrire on teste l'url dans le navigateur

  getDatas(){
    // appel http
    return this.http.get('http://localhost:4009/clients');
  }

}

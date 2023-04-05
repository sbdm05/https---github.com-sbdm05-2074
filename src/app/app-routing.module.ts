import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { PageListClientsComponent } from './clients/pages/page-list-clients/page-list-clients.component';
import { PageAddOrderComponent } from './orders/pages/page-add-order/page-add-order.component';
import { PageEditOrderComponent } from './orders/pages/page-edit-order/page-edit-order.component';

import { PageListOrdersComponent } from './orders/pages/page-list-orders/page-list-orders.component';
import { PageNotFoundComponent } from './page-not-found/pages/page-not-found/page-not-found.component';


// ici on va définir des routes
// tableau de routes
// chaque route est un objet
const routes: Routes = [
  { path: '', component: PageListOrdersComponent },
  { path: 'add', component: PageAddOrderComponent },
  { path: 'edit', component: PageEditOrderComponent },
  // charge le module pagenotfound que si l'utilisateur
  // emprunte une route qui n'existe pas
  // créer module > composant > pagenotfound
  // lazy loading = on ne charge le module que si besoin

  // lazy loading sur le module clients
  // tester dans le navigateur
  {
    path: 'clients',
    loadChildren: () =>
      import('./clients/clients.module').then(
        (m) => m.ClientsModule
      ),
  },
  {
    path: '**',
    loadChildren: () =>
      import('./page-not-found/page-not-found.module').then(
        (m) => m.PageNotFoundModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  // afficher le tableau complet des routes
  // injecter / utiliser une fonctionnalité Router
  constructor(private router : Router){
    // console.log(this.router.config, 'tableau de routes')
  }
}

import { Component } from '@angular/core';
import { main } from '@popperjs/core';

// decorateur
// c'est ici qu'on fait le lien entre le fichier ts et les autres fichiers
// head
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  // propriété = variable
  title: string = 'Titre';

  // créer une propriété en boolean
  open: boolean = false;

  // ici une méthode
  onClick() {
    // console.log('cliqué');
    // if
    // operateur ! = js
    this.open = !this.open;
    console.log(this.open);
  }

}// NE RIEN ECRIRE APRES DE CETTE LIGNE
// index.html =>  script.js + style.css

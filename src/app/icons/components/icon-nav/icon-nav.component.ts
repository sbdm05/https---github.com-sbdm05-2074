import { Component } from '@angular/core';
// importer la variable
import { faBars } from '@fortawesome/free-solid-svg-icons';

// decorateur
@Component({
  selector: 'app-icon-nav',
  templateUrl: './icon-nav.component.html',
  styleUrls: ['./icon-nav.component.scss'],
})
export class IconNavComponent {
  // stocker faBars dans propriété locale
  icon = faBars;

}

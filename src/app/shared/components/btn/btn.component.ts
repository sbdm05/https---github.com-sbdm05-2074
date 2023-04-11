import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.scss'],
})
export class BtnComponent {
  // que fait le @Input() ????
  // décorateur
  // informer angular que la valeur de label vient du parent

  @Input() label!: string;
  @Input() styleBtn!: string;
  @Input() route!: string;
}

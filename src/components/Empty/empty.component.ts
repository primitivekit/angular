import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'pk-empty',
  standalone: true,
  imports: [CommonModule],
  template: `<div [class]="className"><ng-content></ng-content></div>`,
  styleUrls: ['./Empty.css']
})
export class EmptyComponent {
  @Input() description?: any;
  @Input() image?: any;
  @Input() size?: EmptySize;
  @Input() cssVariables?: Partial<EmptyCSSVariables>;
  @Input() className: string = '';
}

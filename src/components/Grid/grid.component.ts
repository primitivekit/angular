import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'pk-grid',
  standalone: true,
  imports: [CommonModule],
  template: `<div [class]="className"><ng-content></ng-content></div>`,
  styleUrls: ['./Grid.css']
})
export class GridComponent {
  @Input() columns?: number | string;
  @Input() gap?: string | number;
  @Input() rowGap?: string | number;
  @Input() columnGap?: string | number;
  @Input() autoRows?: string;
  @Input() autoColumns?: string;
  @Input() className: string = '';
}

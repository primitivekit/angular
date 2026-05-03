import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'pk-typography',
  standalone: true,
  imports: [CommonModule],
  template: `<div [class]="className"><ng-content></ng-content></div>`,
  styleUrls: ['./Typography.css']
})
export class TypographyComponent {
  @Input() variant?: TypographyVariant;
  @Input() weight?: TypographyWeight;
  @Input() align?: TypographyAlign;
  @Input() color?: string;
  @Input() ellipsis?: boolean;
  @Input() lineClamp?: number;
  @Input() component?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
  @Input() className: string = '';
}

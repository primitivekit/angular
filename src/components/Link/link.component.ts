import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'pk-link',
  standalone: true,
  imports: [CommonModule],
  template: `<div [class]="className"><ng-content></ng-content></div>`,
  styleUrls: ['./Link.css']
})
export class LinkComponent {
  @Input() variant?: LinkVariant;
  @Input() size?: LinkSize;
  @Input() disabled?: boolean;
  @Input() external?: boolean;
  @Input() underline?: 'none' | 'hover' | 'always';
  @Input() href?: string;
  @Input() target?: string;
  @Input() rel?: string;
  @Input() leftIcon?: any;
  @Input() rightIcon?: any;
  @Input() ariaLabel?: string;
  @Input() ariaDescribedBy?: string;
  @Input() ariaCurrent?: 'page' | 'step' | 'location' | 'date' | 'time' | 'true' | 'false';
  @Input() className: string = '';
}

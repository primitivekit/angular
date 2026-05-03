import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'pk-tooltip',
  standalone: true,
  imports: [CommonModule],
  template: `<div [class]="className"><ng-content></ng-content></div>`,
  styleUrls: ['./Tooltip.css']
})
export class TooltipComponent {
  @Input() content: any;
  @Input() placement?: TooltipPlacement;
  @Input() variant?: TooltipVariant;
  @Input() showArrow?: boolean;
  @Input() delay?: number;
  @Input() disabled?: boolean;
  @Input() ariaLabel?: string;
  @Input() className: string = '';
}

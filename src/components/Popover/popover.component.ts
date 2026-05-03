import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'pk-popover',
  standalone: true,
  imports: [CommonModule],
  template: `<div [class]="className"><ng-content></ng-content></div>`,
  styleUrls: ['./Popover.css']
})
export class PopoverComponent {
  @Input() content: any;
  @Input() header?: any;
  @Input() footer?: any;
  @Input() placement?: PopoverPlacement;
  @Input() trigger?: PopoverTrigger;
  @Input() showArrow?: boolean;
  @Input() showCloseButton?: boolean;
  @Input() closeOnOutsideClick?: boolean;
  @Input() closeOnEscape?: boolean;
  @Input() delay?: number;
  @Input() isOpen?: boolean;
  @Input() defaultOpen?: boolean;
  @Input() onOpenChange?: (isOpen: boolean) => void;
  @Input() disabled?: boolean;
  @Input() ariaLabel?: string;
  @Input() className: string = '';
}

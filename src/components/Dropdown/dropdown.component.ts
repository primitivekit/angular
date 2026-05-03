import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'pk-dropdown',
  standalone: true,
  imports: [CommonModule],
  template: `<div [class]="className"><ng-content></ng-content></div>`,
  styleUrls: ['./Dropdown.css']
})
export class DropdownComponent {
  @Input() items: DropdownItem[];
  @Input() placement?: DropdownPlacement;
  @Input() closeOnClick?: boolean;
  @Input() closeOnOutsideClick?: boolean;
  @Input() closeOnEscape?: boolean;
  @Input() isOpen?: boolean;
  @Input() defaultOpen?: boolean;
  @Input() onOpenChange?: (isOpen: boolean) => void;
  @Input() disabled?: boolean;
  @Input() ariaLabel?: string;
  @Input() className: string = '';
}

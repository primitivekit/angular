import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'pk-checkbox',
  standalone: true,
  imports: [CommonModule],
  template: `<div [class]="className"><ng-content></ng-content></div>`,
  styleUrls: ['./Checkbox.css']
})
export class CheckboxComponent {
  @Input() size?: CheckboxSize;
  @Input() label?: string;
  @Input() helperText?: string;
  @Input() error?: string;
  @Input() id?: string;
  @Input() name?: string;
  @Input() checked?: boolean;
  @Input() defaultChecked?: boolean;
  @Input() onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  @Input() disabled?: boolean;
  @Input() required?: boolean;
  @Input() indeterminate?: boolean;
  @Input() ariaLabel?: string;
  @Input() className: string = '';
}

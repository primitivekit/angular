import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'pk-switch',
  standalone: true,
  imports: [CommonModule],
  template: `<div [class]="className"><ng-content></ng-content></div>`,
  styleUrls: ['./Switch.css']
})
export class SwitchComponent {
  @Input() size?: SwitchSize;
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
  @Input() ariaLabel?: string;
  @Input() className: string = '';
}

import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'pk-radio',
  standalone: true,
  imports: [CommonModule],
  template: `<div [class]="className"><ng-content></ng-content></div>`,
  styleUrls: ['./Radio.css']
})
export class RadioComponent {
  @Input() size?: RadioSize;
  @Input() label?: string;
  @Input() helperText?: string;
  @Input() error?: string;
  @Input() id?: string;
  @Input() name?: string;
  @Input() value?: string;
  @Input() checked?: boolean;
  @Input() defaultChecked?: boolean;
  @Input() onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  @Input() disabled?: boolean;
  @Input() required?: boolean;
  @Input() ariaLabel?: string;
  @Input() className: string = '';
}

import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'pk-select',
  standalone: true,
  imports: [CommonModule],
  template: `<div [class]="className"><ng-content></ng-content></div>`,
  styleUrls: ['./Select.css']
})
export class SelectComponent {
  @Input() size?: SelectSize;
  @Input() variant?: SelectVariant;
  @Input() state?: SelectState;
  @Input() label?: string;
  @Input() helperText?: string;
  @Input() error?: string;
  @Input() success?: string;
  @Input() warning?: string;
  @Input() fullWidth?: boolean;
  @Input() options: SelectOption[];
  @Input() placeholder?: string;
  @Input() id?: string;
  @Input() name?: string;
  @Input() value?: string | number;
  @Input() defaultValue?: string | number;
  @Input() onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  @Input() disabled?: boolean;
  @Input() required?: boolean;
  @Input() ariaLabel?: string;
  @Input() className: string = '';
}

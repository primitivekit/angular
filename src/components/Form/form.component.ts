import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'pk-form',
  standalone: true,
  imports: [CommonModule],
  template: `<div [class]="className"><ng-content></ng-content></div>`,
  styleUrls: ['./Form.css']
})
export class FormComponent {
  @Input() layout?: FormLayout;
  @Input() size?: FormSize;
  @Input() cssVariables?: Partial<FormCSSVariables>;
  @Input() onSubmit?: (values: Record<string, any>) => void;
  @Input() onValidate?: (values: Record<string, any>) => Record<string, string>;
  @Input() className: string = '';
}

import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'pk-textarea',
  standalone: true,
  imports: [CommonModule],
  template: `<div [class]="className"><ng-content></ng-content></div>`,
  styleUrls: ['./Textarea.css']
})
export class TextareaComponent {
  @Input() size?: TextareaSize;
  @Input() variant?: TextareaVariant;
  @Input() state?: TextareaState;
  @Input() resize?: TextareaResize;
  @Input() label?: string;
  @Input() helperText?: string;
  @Input() error?: string;
  @Input() success?: string;
  @Input() warning?: string;
  @Input() fullWidth?: boolean;
  @Input() id?: string;
  @Input() name?: string;
  @Input() placeholder?: string;
  @Input() value?: string;
  @Input() defaultValue?: string;
  @Input() rows?: number;
  @Input() onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  @Input() onFocus?: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
  @Input() onBlur?: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
  @Input() disabled?: boolean;
  @Input() readOnly?: boolean;
  @Input() required?: boolean;
  @Input() maxLength?: number;
  @Input() ariaLabel?: string;
  @Input() ariaDescribedBy?: string;
  @Input() ariaInvalid?: boolean;
  @Input() className: string = '';
}

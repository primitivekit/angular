import { Component, Input, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export type InputType = 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'search';
export type InputSize = 'small' | 'medium' | 'large';

@Component({
  selector: 'pk-input',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div [class]="getWrapperClasses()">
      <label *ngIf="label" [for]="inputId" class="pk-input__label">
        {{ label }}
        <span *ngIf="required" class="pk-input__required">*</span>
      </label>
      <input
        [id]="inputId"
        [class]="getInputClasses()"
        [type]="type"
        [placeholder]="placeholder"
        [disabled]="disabled"
        [required]="required"
        [attr.aria-label]="ariaLabel || label"
        [attr.aria-invalid]="error ? 'true' : null"
        [style]="customStyles"
        [value]="value"
        (input)="onInput($event)"
        (blur)="onTouched()"
      />
      <span *ngIf="error" class="pk-input__error">{{ error }}</span>
      <span *ngIf="helperText && !error" class="pk-input__helper">{{ helperText }}</span>
    </div>
  `,
  styleUrls: ['./input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    }
  ]
})
export class InputComponent implements ControlValueAccessor {
  @Input() label?: string;
  @Input() type: InputType = 'text';
  @Input() size: InputSize = 'medium';
  @Input() placeholder?: string;
  @Input() disabled: boolean = false;
  @Input() required: boolean = false;
  @Input() error?: string;
  @Input() helperText?: string;
  @Input() ariaLabel?: string;
  @Input() cssVariables?: Record<string, string>;
  @Input() inputId: string = `pk-input-${Math.random().toString(36).substr(2, 9)}`;

  value: string = '';
  onChange: (value: string) => void = () => {};
  onTouched: () => void = () => {};

  get customStyles(): string {
    if (!this.cssVariables) return '';
    return Object.entries(this.cssVariables)
      .map(([key, value]) => `${key}: ${value}`)
      .join('; ');
  }

  getWrapperClasses(): string {
    return 'pk-input-wrapper';
  }

  getInputClasses(): string {
    let classes = `pk-input pk-input--${this.size}`;
    if (this.error) classes += ' pk-input--error';
    if (this.disabled) classes += ' pk-input--disabled';
    return classes;
  }

  onInput(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.value = target.value;
    this.onChange(this.value);
  }

  writeValue(value: string): void {
    this.value = value || '';
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}

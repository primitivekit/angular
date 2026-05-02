import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export type ButtonVariant = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info';
export type ButtonSize = 'small' | 'medium' | 'large';

@Component({
  selector: 'pk-button',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button
      [class]="getButtonClasses()"
      [type]="type"
      [disabled]="disabled"
      [attr.aria-label]="ariaLabel"
      [style]="customStyles"
    >
      <ng-content></ng-content>
    </button>
  `,
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() variant: ButtonVariant = 'primary';
  @Input() size: ButtonSize = 'medium';
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() disabled: boolean = false;
  @Input() ariaLabel?: string;
  @Input() cssVariables?: Record<string, string>;

  get customStyles(): string {
    if (!this.cssVariables) return '';
    return Object.entries(this.cssVariables)
      .map(([key, value]) => `${key}: ${value}`)
      .join('; ');
  }

  getButtonClasses(): string {
    return `pk-button pk-button--${this.variant} pk-button--${this.size}`;
  }
}

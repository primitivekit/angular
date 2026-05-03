import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export type DividerOrientation = 'horizontal' | 'vertical';
export type DividerVariant = 'solid' | 'dashed' | 'dotted';

@Component({
  selector: 'pk-divider',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div *ngIf="label && orientation === 'horizontal'" [ngClass]="dividerClasses" role="separator">
      <hr class="divider__line" />
      <span class="divider__label">{{ label }}</span>
      <hr class="divider__line" />
    </div>
    <hr *ngIf="!label || orientation === 'vertical'" 
        [ngClass]="dividerClasses" 
        role="separator"
        [attr.aria-orientation]="orientation" />
  `,
  styleUrls: ['./Divider.css']
})
export class DividerComponent {
  @Input() orientation: DividerOrientation = 'horizontal';
  @Input() variant: DividerVariant = 'solid';
  @Input() label?: string;
  @Input() className: string = '';

  get dividerClasses(): string {
    return [
      'divider',
      `divider--${this.orientation}`,
      `divider--${this.variant}`,
      this.label ? 'divider--with-label' : '',
      this.className
    ].filter(Boolean).join(' ');
  }
}

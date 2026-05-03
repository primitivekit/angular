import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export type BadgeVariant = 'solid' | 'subtle' | 'outline';
export type BadgeColorScheme = 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info';
export type BadgeSize = 'small' | 'medium' | 'large';

@Component({
  selector: 'pk-badge',
  standalone: true,
  imports: [CommonModule],
  template: `<span [ngClass]="badgeClasses"><ng-content></ng-content></span>`,
  styleUrls: ['./badge.component.css']
})
export class BadgeComponent {
  @Input() variant: BadgeVariant = 'solid';
  @Input() colorScheme: BadgeColorScheme = 'primary';
  @Input() size: BadgeSize = 'medium';
  @Input() className: string = '';

  get badgeClasses(): string {
    return [
      'badge',
      `badge--${this.variant}`,
      `badge--${this.colorScheme}`,
      `badge--${this.size}`,
      this.className
    ].filter(Boolean).join(' ');
  }
}

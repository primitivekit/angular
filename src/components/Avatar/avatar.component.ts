import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export type AvatarSize = 'small' | 'medium' | 'large' | number;
export type AvatarShape = 'circle' | 'square';

@Component({
  selector: 'pk-avatar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div 
      [ngClass]="avatarClasses"
      [ngStyle]="avatarStyles"
      [attr.role]="onClick ? 'button' : null"
      [attr.tabindex]="onClick ? 0 : null"
      (click)="handleClick()">
      <img 
        *ngIf="src && !imgError"
        [src]="src"
        [alt]="alt"
        class="avatar__image"
        (error)="imgError = true" />
      <span *ngIf="!src || imgError" class="avatar__text">
        <ng-content></ng-content>
        <span *ngIf="!hasContent">{{ alt.charAt(0).toUpperCase() }}</span>
      </span>
    </div>
  `,
  styleUrls: ['./Avatar.css']
})
export class AvatarComponent {
  @Input() src?: string;
  @Input() alt: string = 'Avatar';
  @Input() size: AvatarSize = 'medium';
  @Input() shape: AvatarShape = 'circle';
  @Input() className: string = '';
  @Input() onClick?: () => void;

  imgError = false;
  hasContent = false;

  get avatarClasses(): string {
    return [
      'avatar',
      `avatar--${this.shape}`,
      typeof this.size === 'string' ? `avatar--${this.size}` : '',
      this.onClick ? 'avatar--clickable' : '',
      this.className
    ].filter(Boolean).join(' ');
  }

  get avatarStyles(): any {
    if (typeof this.size === 'number') {
      return { '--avatar-size': `${this.size}px` };
    }
    return {};
  }

  handleClick(): void {
    if (this.onClick) {
      this.onClick();
    }
  }
}

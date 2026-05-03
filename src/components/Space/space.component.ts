import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export type SpaceSize = 'small' | 'medium' | 'large' | number;
export type SpaceDirection = 'horizontal' | 'vertical';
export type SpaceAlign = 'start' | 'end' | 'center' | 'baseline';

@Component({
  selector: 'pk-space',
  standalone: true,
  imports: [CommonModule],
  template: `<div [ngClass]="spaceClasses" [ngStyle]="spaceStyles"><ng-content></ng-content></div>`,
  styleUrls: ['./Space.css']
})
export class SpaceComponent {
  @Input() size: SpaceSize = 'medium';
  @Input() direction: SpaceDirection = 'horizontal';
  @Input() align?: SpaceAlign;
  @Input() wrap: boolean = false;
  @Input() className: string = '';

  get spaceClasses(): string {
    return [
      'space',
      `space--${this.direction}`,
      typeof this.size === 'string' ? `space--${this.size}` : '',
      this.align ? `space--align-${this.align}` : '',
      this.wrap ? 'space--wrap' : '',
      this.className
    ].filter(Boolean).join(' ');
  }

  get spaceStyles(): any {
    if (typeof this.size === 'number') {
      return { '--space-gap': `${this.size}px` };
    }
    return {};
  }
}

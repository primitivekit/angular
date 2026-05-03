import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

export type TagVariant = 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info';
export type TagSize = 'small' | 'medium' | 'large';

@Component({
  selector: 'pk-tag',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tag.component.html',
  styleUrls: ['./Tag.css']
})
export class TagComponent {
  @Input() variant: TagVariant = 'default';
  @Input() size: TagSize = 'medium';
  @Input() closable: boolean = false;
  @Input() className: string = '';
  @Output() close = new EventEmitter<void>();

  get tagClasses(): string {
    return [
      'tag',
      `tag--${this.variant}`,
      `tag--${this.size}`,
      this.className
    ].filter(Boolean).join(' ');
  }

  onClose(): void {
    this.close.emit();
  }
}

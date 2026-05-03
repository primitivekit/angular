import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export type CardVariant = 'elevated' | 'outlined' | 'filled';

@Component({
  selector: 'pk-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() variant: CardVariant = 'elevated';
  @Input() hoverable: boolean = false;
  @Input() clickable: boolean = false;
  @Input() className: string = '';

  get cardClasses(): string {
    return [
      'card',
      `card--${this.variant}`,
      this.hoverable ? 'card--hoverable' : '',
      this.clickable ? 'card--clickable' : '',
      this.className
    ].filter(Boolean).join(' ');
  }
}

import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'pk-slider',
  standalone: true,
  imports: [CommonModule],
  template: `<div [class]="className"><ng-content></ng-content></div>`,
  styleUrls: ['./Slider.css']
})
export class SliderComponent {
  @Input() value?: number | [number, number];
  @Input() defaultValue?: number | [number, number];
  @Input() min?: number;
  @Input() max?: number;
  @Input() step?: number;
  @Input() range?: boolean;
  @Input() marks?: Record<number, string | { label: string;
  @Input() className: string = '';
}

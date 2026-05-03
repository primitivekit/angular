import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'pk-progress',
  standalone: true,
  imports: [CommonModule],
  template: `<div [class]="className"><ng-content></ng-content></div>`,
  styleUrls: ['./Progress.css']
})
export class ProgressComponent {
  @Input() value?: number;
  @Input() max?: number;
  @Input() size?: ProgressSize;
  @Input() variant?: ProgressVariant;
  @Input() label?: string;
  @Input() showValue?: boolean;
  @Input() className: string = '';
}

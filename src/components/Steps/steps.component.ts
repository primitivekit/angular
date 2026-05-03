import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'pk-steps',
  standalone: true,
  imports: [CommonModule],
  template: `<div [class]="className"><ng-content></ng-content></div>`,
  styleUrls: ['./Steps.css']
})
export class StepsComponent {
  @Input() items: StepItem[];
  @Input() current?: number;
  @Input() direction?: StepsDirection;
  @Input() size?: StepsSize;
  @Input() cssVariables?: Partial<StepsCSSVariables>;
  @Input() onChange?: (current: number) => void;
  @Input() className: string = '';
}

import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'pk-spinner',
  standalone: true,
  imports: [CommonModule],
  template: `<div [class]="className"><ng-content></ng-content></div>`,
  styleUrls: ['./Spinner.css']
})
export class SpinnerComponent {
  @Input() size?: SpinnerSize;
  @Input() variant?: SpinnerVariant;
  @Input() color?: string;
  @Input() label?: string;
  @Input() className: string = '';
}

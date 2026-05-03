import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'pk-stack',
  standalone: true,
  imports: [CommonModule],
  template: `<div [class]="className"><ng-content></ng-content></div>`,
  styleUrls: ['./Stack.css']
})
export class StackComponent {
  @Input() direction?: StackDirection;
  @Input() align?: StackAlign;
  @Input() justify?: StackJustify;
  @Input() gap?: string | number;
  @Input() wrap?: boolean;
  @Input() className: string = '';
}

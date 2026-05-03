import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'pk-container',
  standalone: true,
  imports: [CommonModule],
  template: `<div [class]="className"><ng-content></ng-content></div>`,
  styleUrls: ['./Container.css']
})
export class ContainerComponent {
  @Input() size?: ContainerSize;
  @Input() centerContent?: boolean;
  @Input() className: string = '';
}

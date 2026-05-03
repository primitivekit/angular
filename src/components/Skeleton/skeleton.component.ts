import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'pk-skeleton',
  standalone: true,
  imports: [CommonModule],
  template: `<div [class]="className"><ng-content></ng-content></div>`,
  styleUrls: ['./Skeleton.css']
})
export class SkeletonComponent {
  @Input() variant?: SkeletonVariant;
  @Input() width?: string | number;
  @Input() height?: string | number;
  @Input() circle?: boolean;
  @Input() count?: number;
  @Input() className: string = '';
}

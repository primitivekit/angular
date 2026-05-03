import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'pk-breadcrumb',
  standalone: true,
  imports: [CommonModule],
  template: `<div [class]="className"><ng-content></ng-content></div>`,
  styleUrls: ['./Breadcrumb.css']
})
export class BreadcrumbComponent {
  @Input() items: BreadcrumbItem[];
  @Input() separator?: BreadcrumbSeparator;
  @Input() customSeparator?: any;
  @Input() size?: BreadcrumbSize;
  @Input() maxItems?: number;
  @Input() showHomeIcon?: boolean;
  @Input() ariaLabel?: string;
  @Input() onItemClick?: (item: BreadcrumbItem) => void;
  @Input() className: string = '';
}

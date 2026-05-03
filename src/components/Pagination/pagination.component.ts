import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'pk-pagination',
  standalone: true,
  imports: [CommonModule],
  template: `<div [class]="className"><ng-content></ng-content></div>`,
  styleUrls: ['./Pagination.css']
})
export class PaginationComponent {
  @Input() current?: number;
  @Input() defaultCurrent?: number;
  @Input() total: number;
  @Input() pageSize?: number;
  @Input() defaultPageSize?: number;
  @Input() pageSizeOptions?: number[];
  @Input() showSizeChanger?: boolean;
  @Input() showQuickJumper?: boolean;
  @Input() showTotal?: boolean | ((total: number, range: [number, number]) => string);
  @Input() size?: PaginationSize;
  @Input() disabled?: boolean;
  @Input() simple?: boolean;
  @Input() cssVariables?: Partial<PaginationCSSVariables>;
  @Input() onChange?: (page: number, pageSize: number) => void;
  @Input() onShowSizeChange?: (current: number, size: number) => void;
  @Input() className: string = '';
}

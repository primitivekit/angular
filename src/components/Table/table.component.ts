import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'pk-table',
  standalone: true,
  imports: [CommonModule],
  template: `<div [class]="className"><ng-content></ng-content></div>`,
  styleUrls: ['./Table.css']
})
export class TableComponent {
  @Input() columns: TableColumn<T>[];
  @Input() dataSource: T[];
  @Input() rowKey?: string | ((record: T) => string);
  @Input() size?: TableSize;
  @Input() bordered?: boolean;
  @Input() hoverable?: boolean;
  @Input() striped?: boolean;
  @Input() loading?: boolean;
  @Input() emptyText?: any;
  @Input() current?: number;
  @Input() pageSize?: number;
  @Input() total?: number;
  @Input() onChange?: (page: number, pageSize: number) => void;
  @Input() className: string = '';
}

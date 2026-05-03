import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'pk-collapse',
  standalone: true,
  imports: [CommonModule],
  template: `<div [class]="className"><ng-content></ng-content></div>`,
  styleUrls: ['./Collapse.css']
})
export class CollapseComponent {
  @Input() items: CollapseItem[];
  @Input() activeKey?: string | string[];
  @Input() defaultActiveKey?: string | string[];
  @Input() accordion?: boolean;
  @Input() bordered?: boolean;
  @Input() expandIconPosition?: 'start' | 'end';
  @Input() cssVariables?: Partial<CollapseCSSVariables>;
  @Input() onChange?: (key: string | string[]) => void;
  @Input() className: string = '';
}

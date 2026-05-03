import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'pk-tabs',
  standalone: true,
  imports: [CommonModule],
  template: `<div [class]="className"><ng-content></ng-content></div>`,
  styleUrls: ['./Tabs.css']
})
export class TabsComponent {
  @Input() items: TabItem[];
  @Input() activeTab?: string;
  @Input() defaultActiveTab?: string;
  @Input() onChange?: (tabId: string) => void;
  @Input() variant?: TabsVariant;
  @Input() size?: TabsSize;
  @Input() orientation?: TabsOrientation;
  @Input() fullWidth?: boolean;
  @Input() ariaLabel?: string;
  @Input() className: string = '';
}

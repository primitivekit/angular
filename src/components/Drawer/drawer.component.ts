import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'pk-drawer',
  standalone: true,
  imports: [CommonModule],
  template: `<div [class]="className"><ng-content></ng-content></div>`,
  styleUrls: ['./Drawer.css']
})
export class DrawerComponent {
  @Input() open: boolean;
  @Input() title?: any;
  @Input() placement?: DrawerPlacement;
  @Input() size?: DrawerSize;
  @Input() width?: string | number;
  @Input() height?: string | number;
  @Input() footer?: any;
  @Input() closable?: boolean;
  @Input() mask?: boolean;
  @Input() maskClosable?: boolean;
  @Input() keyboard?: boolean;
  @Input() cssVariables?: Partial<DrawerCSSVariables>;
  @Input() onClose?: () => void;
  @Input() afterOpenChange?: (open: boolean) => void;
  @Input() className: string = '';
}

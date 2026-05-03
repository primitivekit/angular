import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'pk-menu',
  standalone: true,
  imports: [CommonModule],
  template: `<div [class]="className"><ng-content></ng-content></div>`,
  styleUrls: ['./Menu.css']
})
export class MenuComponent {
  @Input() items: MenuItem[];
  @Input() mode?: MenuMode;
  @Input() theme?: MenuTheme;
  @Input() selectedKeys?: string[];
  @Input() defaultSelectedKeys?: string[];
  @Input() openKeys?: string[];
  @Input() defaultOpenKeys?: string[];
  @Input() multiple?: boolean;
  @Input() cssVariables?: Partial<MenuCSSVariables>;
  @Input() onSelect?: (key: string) => void;
  @Input() onOpenChange?: (openKeys: string[]) => void;
  @Input() className: string = '';
}

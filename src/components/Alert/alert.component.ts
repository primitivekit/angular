import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'pk-alert',
  standalone: true,
  imports: [CommonModule],
  template: `<div [class]="className"><ng-content></ng-content></div>`,
  styleUrls: ['./Alert.css']
})
export class AlertComponent {
  @Input() variant?: AlertVariant;
  @Input() status?: AlertStatus;
  @Input() title?: string;
  @Input() icon?: any;
  @Input() onClose?: () => void;
  @Input() className: string = '';
}

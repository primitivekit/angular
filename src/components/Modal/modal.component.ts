import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'pk-modal',
  standalone: true,
  imports: [CommonModule],
  template: `<div [class]="className"><ng-content></ng-content></div>`,
  styleUrls: ['./Modal.css']
})
export class ModalComponent {
  @Input() isOpen: boolean;
  @Input() onClose: () => void;
  @Input() title?: any;
  @Input() footer?: any;
  @Input() size?: ModalSize;
  @Input() showCloseButton?: boolean;
  @Input() closeOnOverlayClick?: boolean;
  @Input() closeOnEscape?: boolean;
  @Input() preventScroll?: boolean;
  @Input() centered?: boolean;
  @Input() ariaLabel?: string;
  @Input() ariaDescribedBy?: string;
  @Input() className: string = '';
}

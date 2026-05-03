import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'pk-image',
  standalone: true,
  imports: [CommonModule],
  template: `<div [class]="className"><ng-content></ng-content></div>`,
  styleUrls: ['./Image.css']
})
export class ImageComponent {
  @Input() src: string;
  @Input() alt: string;
  @Input() width?: string | number;
  @Input() height?: string | number;
  @Input() fit?: ImageFit;
  @Input() placeholder?: any;
  @Input() fallback?: any;
  @Input() preview?: boolean;
  @Input() previewSrc?: string;
  @Input() loading?: 'lazy' | 'eager';
  @Input() cssVariables?: Partial<ImageCSSVariables>;
  @Input() onLoad?: () => void;
  @Input() onError?: () => void;
  @Input() className: string = '';
}

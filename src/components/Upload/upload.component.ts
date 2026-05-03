import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'pk-upload',
  standalone: true,
  imports: [CommonModule],
  template: `<div [class]="className"><ng-content></ng-content></div>`,
  styleUrls: ['./Upload.css']
})
export class UploadComponent {
  @Input() accept?: string;
  @Input() multiple?: boolean;
  @Input() maxCount?: number;
  @Input() maxSize?: number;
  @Input() fileList?: UploadFile[];
  @Input() defaultFileList?: UploadFile[];
  @Input() listType?: UploadListType;
  @Input() showUploadList?: boolean;
  @Input() disabled?: boolean;
  @Input() cssVariables?: Partial<UploadCSSVariables>;
  @Input() beforeUpload?: (file: File) => boolean | Promise<boolean>;
  @Input() file: File;
  @Input() onProgress: (percent: number) => void;
  @Input() onSuccess: (response: any) => void;
  @Input() onError: (error: any) => void;
  @Input() className: string = '';
}

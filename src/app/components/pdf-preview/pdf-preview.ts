import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  ElementRef
} from '@angular/core';

import { CommonModule } from '@angular/common';
import { LocalStorageService } from '../../services/local-storage.service';
import { PdfService } from '../../services/pdf.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pdf-preview',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pdf-preview.html',
  styleUrl: './pdf-preview.css'
})
export class PdfPreview implements OnInit, AfterViewInit {

  @ViewChild('pdfContent', { static: false })
  pdfContent!: ElementRef;

  data: any = {};
  today = new Date();

  private generated = false;

 constructor(
  private storage: LocalStorageService,
  private pdfService: PdfService,
  private router: Router
) {}

  ngOnInit() {
    this.data = this.storage.getData('plano_parto') || {};
  }

ngAfterViewInit() {
  const nav = history.state;

if (nav?.autoPrint) {
  setTimeout(() => {
    this.pdfService.generatePdf(
      'pdf-content',
      'Plano_de_Parto.pdf'
    );
  }, 1000);
}
}
generatePdf() {
  this.pdfService.generatePdf(
    'pdf-content',
    'Plano_de_Parto.pdf'
  );
}

  formatValue(value: any): string {
  if (!value) return '-';

  if (Array.isArray(value)) {
    return value.join(', ');
  }

  return String(value);
}
}
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PdfService {

  async generatePdf(
    elementId: string,
    fileName: string
  ) {

    if (typeof window === 'undefined') {
      return;
    }

    const element =
      document.getElementById(elementId);

    if (!element) {
      console.error('Elemento não encontrado');
      return;
    }

    const html2pdf =
      await import('html2pdf.js');

    const options: any = {
      margin: 0,
      filename: fileName,

      image: {
        type: 'jpeg',
        quality: 1
      },

      html2canvas: {
        scale: 2,
        useCORS: true
      },

      jsPDF: {
        unit: 'mm',
        format: 'a4',
        orientation: 'portrait'
      }
    };

    (html2pdf.default as any)()
      .set(options)
      .from(element)
      .save();
  }
}
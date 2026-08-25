import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PdfService {

  // Aceita tanto uma string (ID) quanto um elemento HTMLElement direto
  async generatePdf(
    target: string | HTMLElement,
    fileName: string
  ) {
    if (typeof window === 'undefined') {
      return;
    }

    const element = typeof target === 'string' ? document.getElementById(target) : target;

    if (!element) {
      console.error('Elemento não encontrado para gerar PDF');
      return;
    }

    const html2pdf = await import('html2pdf.js');
    const options = this.getOptions(element as HTMLElement, fileName);

    (html2pdf.default as any)()
      .set(options)
      .from(element)
      .save();
  }

  // Versão em Blob que também aceita HTMLElement direto
  async generatePdfBlob(
    target: string | HTMLElement,
    fileName: string = 'documento.pdf'
  ): Promise<Blob | null> {

    if (typeof window === 'undefined') {
      return null;
    }

    const element = typeof target === 'string' ? document.getElementById(target) : target;

    if (!element) {
      console.error('Elemento não encontrado para gerar Blob');
      return null;
    }

    const html2pdf = await import('html2pdf.js');
    const options = this.getOptions(element as HTMLElement, fileName);

    const pdfBlob: Blob = await (html2pdf.default as any)()
      .set(options)
      .from(element)
      .outputPdf('blob');

    return pdfBlob;
  }

  private getOptions(element: HTMLElement, fileName: string): any {
    return {
      margin: 0,
      filename: fileName,
      image: {
        type: 'jpeg',
        quality: 1
      },
      html2canvas: {
        scale: 3,
        useCORS: true,
        scrollX: 0,
        scrollY: 0,
        windowWidth: element.scrollWidth,
        windowHeight: element.scrollHeight
      },
      pagebreak: {
        mode: ['avoid-all', 'css', 'legacy']
      },
      jsPDF: {
        unit: 'mm',
        format: 'a4',
        orientation: 'portrait'
      }
    };
  }
}
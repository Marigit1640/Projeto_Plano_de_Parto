import { Injectable } from '@angular/core';
import * as pdfMakeLib from 'pdfmake/build/pdfmake';
import * as pdfFontsLib from 'pdfmake/build/vfs_fonts';
import { DEMO_QUESTIONS } from '../data/questions';

const buildPdfMake: any = pdfMakeLib;
if (buildPdfMake && buildPdfMake.vfs == null && pdfFontsLib && (pdfFontsLib as any).pdfMake) {
  try {
     const vfs = (pdfFontsLib as any).pdfMake.vfs || (pdfFontsLib as any).vfs;
     if (!buildPdfMake.vfs) {
         Object.defineProperty(buildPdfMake, 'vfs', {
             value: vfs,
             writable: true
         });
     }
  } catch(e) {}
}


@Injectable({ providedIn: 'root' })
export class PdfService {

  generatePdf(data: any) {
    const documentDefinition: any = {
      content: [
        { text: 'Meu Plano de Parto Digital', style: 'header' },
        '\n',
      ],
      styles: {
        header: {
          fontSize: 22,
          bold: true,
          color: '#7B2CBF',
          alignment: 'center'
        },
        question: {
          fontSize: 14,
          bold: true,
          color: '#9D4EDD',
          margin: [0, 10, 0, 5]
        },
        answer: {
          fontSize: 12,
          color: '#333333',
          margin: [0, 0, 0, 10]
        }
      }
    };

    DEMO_QUESTIONS.forEach(q => {
      if (q.type === 'form') {
        documentDefinition.content.push({ text: q.title, style: 'question' });
        q.fields?.forEach(f => {
          const val = data[f.id] || 'Não informado';
          documentDefinition.content.push({ text: `${f.label}: ${val}`, style: 'answer' });
        });
      } else if (q.type === 'choice') {
        documentDefinition.content.push({ text: q.title, style: 'question' });
        const val = data[q.id];
        let answerText = 'Não informado';
        if (Array.isArray(val)) {
          answerText = val.length > 0 ? val.join(', ') : 'Não informado';
        } else if (val) {
          answerText = val;
        }
        documentDefinition.content.push({ text: answerText, style: 'answer' });
      }
    });

    buildPdfMake.createPdf(documentDefinition).download('Meu_Plano_de_Parto.pdf');
  }
}

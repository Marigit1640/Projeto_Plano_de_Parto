import { Injectable } from '@angular/core';
import * as pdfMakeLib from 'pdfmake/build/pdfmake';
import * as pdfFontsLib from 'pdfmake/build/vfs_fonts';
import { DEMO_QUESTIONS } from '../data/questions';

const buildPdfMake: any =
  (pdfMakeLib as any).default || pdfMakeLib;

buildPdfMake.vfs =
  (pdfFontsLib as any).pdfMake?.vfs ||
  (pdfFontsLib as any).vfs;

@Injectable({ providedIn: 'root' })
export class PdfService {

  private createPdf(data: any) {

  
    console.log('DADOS RECEBIDOS NO PDF:', data);
    try {
const hoje = new Date().toLocaleDateString('pt-BR');

const content: any[] = [
   {
  text: 'UNIVERSIDADE FEDERAL DE SÃO JOÃO DEL-REI',
  style: 'university',
  margin: [0, 60, 0, 5]
},

{
  text: 'CAMPUS CENTRO-OESTE',
  style: 'campus',
  margin: [0, 0, 0, 40]
},

{
  canvas: [
    {
      type: 'line',
      x1: 80,
      y1: 0,
      x2: 430,
      y2: 0,
      lineWidth: 2,
      color: '#6B21A8'
    }
  ],
  margin: [0, 0, 0, 25]
},

{
  text: 'PLANO DE PARTO',
  style: 'mainTitle'
},

{
  text: 'Projeto de Educação em Saúde para Gestantes',
  style: 'subHeader',
  alignment: 'center',
  margin: [0, 10, 0, 40]
},

{
  text: `Gestante: ${data.name || 'Não informado'}`,
  style: 'name'
},

{
  text: `Data de emissão: ${hoje}`,
  style: 'date',
  margin: [0, 20, 0, 50]
},

{
  text: 'São João del-Rei - MG',
  alignment: 'center',
  fontSize: 11
},

  {
    text: '',
    pageBreak: 'after'
  },
  {
    canvas: [
      {
        type: 'line',
        x1: 0,
        y1: 5,
        x2: 500,
        y2: 5,
        lineWidth: 1
      }
    ],
    margin: [0, 0, 0, 15]
  }
];
content.push({
  text: 'INFORMAÇÕES DO PLANO DE PARTO',
  style: 'header'
});

content.push({
  canvas: [
    {
      type: 'line',
      x1: 0,
      y1: 5,
      x2: 515,
      y2: 5,
      lineWidth: 1
    }
  ],
  margin: [0, 0, 0, 15]
});
content.push({
  text: 'DADOS DA GESTANTE',
  style: 'sectionTitle'
});
content.push({
  table: {
    widths: ['50%', '50%'],
    body: [
      [
        {
          text: `Nome\n${data.name || '-'}`,
          bold: true,
          margin: [0, 5, 0, 5]
        },
        {
          text: `Data de Nascimento\n${data.dob || '-'}`,
          bold: true,
          margin: [0, 5, 0, 5]
        }
      ],
      [
        {
          text: `CPF\n${data.cpf || '-'}`,
          margin: [0, 5, 0, 5]
        },
        {
          text: `Telefone\n${data.phone || '-'}`,
          margin: [0, 5, 0, 5]
        }
      ]
    ]
  },
  layout: {
    fillColor: (rowIndex: number) =>
      rowIndex % 2 === 0 ? '#F8F5FF' : null
  },
  margin: [0, 0, 0, 20]
});
content.push({
  text: 'DADOS DO BEBÊ',
  style: 'sectionTitle'
});
content.push({
  table: {
    widths: ['*', '*'],
    body: [
      [
        {
          text: `Nome do Bebê\n${data.babyName || '-'}`,
          bold: true
        },
        {
          text: `Sexo do Bebê\n${data.babySex || '-'}`,
          bold: true
        }
      ]
    ]
  },
  layout: {
    fillColor: () => '#F3E8FF'
  },
  margin: [0, 0, 0, 20]
});
DEMO_QUESTIONS.forEach(q => {

  if (q.type === 'form') {
    return;
  }

  if (q.type === 'choice') {

    const value = data[q.id];

    let resposta = 'Não informado';

    if (Array.isArray(value)) {
      resposta = value.join(', ');
    } else if (value) {
      resposta = value;
    }
content.push({
  table: {
    widths: ['*'],
    body: [
      [
        {
          stack: [
            {
              text: q.title,
              fontSize: 11,
              bold: true,
              color: '#6B21A8',
              margin: [0, 0, 0, 6]
            },
            
            {
              
  text: resposta,
  fontSize: 11,
  bold: true,
  color:
    resposta === 'SIM'
      ? '#15803D'
      : resposta === 'NÃO'
      ? '#B91C1C'
      : '#6B21A8'

            }
          ],
          fillColor: '#F8F5FF',
          margin: [8, 8, 8, 8]
        }
      ]
    ]
  },

  layout: {
    hLineWidth: () => 1,
    vLineWidth: () => 1,
    hLineColor: () => '#D8B4FE',
    vLineColor: () => '#D8B4FE'
  },

  margin: [0, 0, 0, 10]
});

  }

});
content.push({
  pageBreak: 'before',
  text: 'ASSINATURAS',
  style: 'sectionTitle'
});
content.push({
  margin: [0, 50, 0, 0],
  columns: [
    {
      width: '45%',
      stack: [
        {
          canvas: [
            {
              type: 'line',
              x1: 0,
              y1: 0,
              x2: 180,
              y2: 0,
              lineWidth: 1
            }
          ]
        },
        {
          text: 'Gestante',
          alignment: 'center',
          margin: [0, 5, 0, 0]
        }
      ]
    },

    {
      width: '10%',
      text: ''
    },

    {
      width: '45%',
      stack: [
        {
          canvas: [
            {
              type: 'line',
              x1: 0,
              y1: 0,
              x2: 180,
              y2: 0,
              lineWidth: 1
            }
          ]
        },
        {
          text: 'Profissional de Saúde',
          alignment: 'center',
          margin: [0, 5, 0, 0]
        }
      ]
    }
  ]
});

const documentDefinition = {
  pageMargins: [40, 50, 40, 50],
  watermark: {
  text: 'PLANO DE PARTO',
  color: '#E9D5FF',
  opacity: 0.03,
  bold: true
},
  footer: (currentPage: number, pageCount: number) => ({
  columns: [
    {
      text: 'Plano de Parto',
      alignment: 'left'
    },
    {
      text: `Página ${currentPage} de ${pageCount}`,
      alignment: 'right'
    }
  ],
  margin: [40, 10]
}),
  

  content,
  defaultStyle: {
  color: '#4B2E83'
},

  styles: {

   header: {
  fontSize: 18,
  bold: true,
  alignment: 'center',
  color: '#6B21A8',
  margin: [0, 0, 0, 15]
},

  sectionTitle: {
    fontSize: 16,
    bold: true,
    color: '#6B21A8',
    margin: [0, 20, 0, 10]
  },

  subHeader: {
    fontSize: 12,
    italics: true,
    margin: [0, 0, 0, 15]
  },


  question: {
  fontSize: 12,
  bold: true,
  color: '#6B21A8',
  fillColor: '#F3E8FF',
  margin: [0, 10, 0, 4]
},

  answer: {
  fontSize: 11,
  margin: [20, 0, 0, 15],
  italics: true,
  color: '#333333'
},
  university: {
  alignment: 'center',
  fontSize: 14,
  bold: true
},

campus: {
  alignment: 'center',
  fontSize: 12,
  margin: [0, 5, 0, 0]
},

projectTitle: {
  alignment: 'center',
  fontSize: 18,
  bold: true,
  color: '#6B21A8'
},

mainTitle: {
  alignment: 'center',
  fontSize: 26,
  bold: true,
  color: '#6B21A8'
},

label: {
  alignment: 'center',
  fontSize: 12,
  bold: true,
  color: '#666666'
},

name: {
  alignment: 'center',
  fontSize: 20,
  bold: true
},

date: {
  alignment: 'center',
  fontSize: 16
},
cardQuestion: {
  fontSize: 11,
  bold: true,
  color: '#6B21A8'
},

cardAnswer: {
  fontSize: 11,
  color: '#333333'
}
}
};
return buildPdfMake.createPdf(documentDefinition);


} catch (error) {
  console.error('ERRO PDF:', error);
}

}


generatePdf(data: any) {
  const pdf = this.createPdf(data);

  pdf.download(
    `Plano_de_Parto_${data.name || 'Gestante'}.pdf`
  );
}
openPdf(data: any) {
  const pdf = this.createPdf(data);

  pdf.open();
}
}
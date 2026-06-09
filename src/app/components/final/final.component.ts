import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { PdfService } from '../../services/pdf.service';
import { LocalStorageService } from '../../services/local-storage.service';
import { AudioService } from '../../services/audio.service';
import { DEMO_QUESTIONS } from '../../data/questions';


@Component({
  selector: 'app-final',
  imports: [CommonModule, MatIconModule],
  template: `
    <div class="flex flex-col items-center justify-center min-h-screen p-6 text-center animate-fade-in relative pb-16">
      
      <div class="absolute left-6 top-6 cursor-pointer text-brand-purple-dark bg-white border-brand-purple border-2 rounded-full p-2 h-14 w-14 flex items-center justify-center z-10 hover:bg-brand-pink-light shadow-md" (click)="playSound()">
         <mat-icon>volume_up</mat-icon>
      </div>

      <div class="w-24 h-24 bg-white rounded-full flex items-center justify-center border-4 border-brand-purple shadow-lg mb-8 text-brand-purple">
        <mat-icon class="scale-[2.5]">check_circle</mat-icon>
      </div>

      <h1 class="text-3xl font-display font-bold text-brand-purple-dark uppercase mb-4 leading-tight">
        PARABÉNS!<br/>SEU PLANO DE PARTO<br/>ESTÁ PRONTO
      </h1>
      
      <p class="text-gray-700 font-medium mb-12 max-w-xs leading-relaxed text-sm">
        Você pode fazer o download do seu plano e acessá-lo quando quiser, ou compartilhar com a maternidade.
      </p>

      <div class="w-full max-w-sm flex flex-col space-y-4">
        <button (click)="generatePdf()" class="button-primary font-bold shadow-lg bg-brand-purple text-white border-transparent">
          BAIXAR PDF <mat-icon class="ml-2 py-0 my-0 relative top-[2px]">picture_as_pdf</mat-icon>
        </button>
  <button
    (click)="openPdf()"
    class="button-primary font-bold shadow-lg">

    ABRIR PDF

    <img
    src="assets/P36 i361.jfif"
    alt="PDF"
    class="w-6 h-6 ml-2 inline-block">

  </button>

  <button
    (click)="shareWhatsapp()"
    class="button-primary font-bold shadow-lg bg-green-600 text-white">

    WHATSAPP

    <img
    src="assets/P36 i362.jfif"
    alt="WhatsApp"
    class="w-6 h-6 ml-2 inline-block">

  </button>

  <button
  (click)="shareEmail()"
  class="button-primary font-bold shadow-lg">

  E-MAIL

  <img
    src="assets/P36 i363.jfif"
    alt="Email"
    class="w-6 h-6 ml-2 inline-block">

</button>
        <button (click)="generateCsv()" class="button-primary font-bold shadow-lg text-brand-purple-dark hover:bg-brand-purple hover:text-white">
          BAIXAR CSV <mat-icon class="ml-2 py-0 my-0 relative top-[2px]">table_chart</mat-icon>
        </button>
        
        <button (click)="restart()" class="text-brand-purple-light font-bold text-sm tracking-wide pt-6 uppercase hover:text-brand-purple transition-colors flex items-center justify-center">
           <mat-icon class="mr-1 scale-75">refresh</mat-icon> Refazer Plano
        </button>
      </div>
    </div>
  `,
  styles: [`
    .animate-fade-in {
      animation: fadeIn 0.4s ease-in-out;
    }
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `]
})

export class FinalComponent implements OnInit {
  private pdfService = inject(PdfService);
  private storage = inject(LocalStorageService);
  private audio = inject(AudioService);
  private router = inject(Router);

ngOnInit() {
    setTimeout(() => {
      this.audio.playNarration('/audio/A36.1.m4a');
    }, 500);
  }

  playSound() {
    this.audio.playBubbleSound();
    this.audio.playNarration('/audio/A36.1.m4a');

  }

  generatePdf() {
    this.audio.playBubbleSound();
    const data = this.storage.getData('plano_parto') || {};
    this.pdfService.generatePdf(data);
  }

  generateCsv() {
    this.audio.playBubbleSound();
    const data = this.storage.getData('plano_parto') || {};
    let csvContent = "data:text/csv;charset=utf-8,";
    csvContent += "Pergunta,Resposta\n";

    DEMO_QUESTIONS.forEach(q => {
       if (q.type === 'form') {
         q.fields?.forEach(f => {
            let val = data[f.id] || 'Não informado';
            // wrap in quotes to handle commas
            csvContent += `"${f.label}","${val}"\n`;
         });
       } else if (q.type === 'choice') {
         let val = data[q.id];
         let answerText = 'Não informado';
         if (Array.isArray(val)) {
            answerText = val.length > 0 ? val.join('; ') : 'Não informado';
         } else if (val) {
            answerText = val;
         }
         csvContent += `"${q.title}","${answerText}"\n`;
       }
    });

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "Meu_Plano_de_Parto.csv");
    document.body.appendChild(link); // Required for FF
    link.click();
    document.body.removeChild(link);
  }

  restart() {
    this.audio.playBubbleSound();
    if(typeof window !== 'undefined' && window.confirm('Deseja realmente refazer o seu plano? Todos os dados serão perdidos.')){
       this.storage.clearData();
       this.router.navigate(['/']);
    }
  }
openPdf() {
  const data =
    this.storage.getData('plano_parto') || {};

  this.pdfService.openPdf(data);
}
shareWhatsapp() {

  const texto =
    'Olá! Segue meu Plano de Parto.';

  const url =
    `https://wa.me/?text=${encodeURIComponent(texto)}`;

  window.open(url, '_blank');
}

shareEmail() {

  const assunto = 'Plano de Parto';

  const corpo =
    'Olá! Segue meu Plano de Parto.';

  window.location.href =
    `mailto:?subject=${encodeURIComponent(assunto)}&body=${encodeURIComponent(corpo)}`;
}
}

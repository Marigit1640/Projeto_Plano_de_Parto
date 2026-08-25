import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-share-pdf',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button 
      class="button-primary font-bold shadow-lg bg-brand-purple text-white border-transparent w-full flex items-center justify-center gap-2" 
      (click)="shareDocument()" 
      [disabled]="isSharing || !pdfBlob">
      <span *ngIf="!isSharing" class="flex items-center gap-2">
        <!-- Ícone / texto de compartilhamento -->
        Compartilhar PDF
      </span>
      <span *ngIf="isSharing">
        Preparando...
      </span>
    </button>
  `,
  styles: []
})
export class SharePdfComponent {
  // Recebe o Blob do PDF gerado
  @Input() pdfBlob!: Blob | null; 
  @Input() fileName: string = 'meu-plano-de-parto.pdf';
  isSharing = false;

  async shareDocument() {
    if (!this.pdfBlob) {
      console.error('Nenhum PDF fornecido para compartilhamento.');
      return;
    }
    this.isSharing = true;

    // A Web Share API exige um objeto File, então convertemos o Blob
    const file = new File([this.pdfBlob], this.fileName, { 
      type: 'application/pdf' 
    });

    try {
      // 1. Verifica se o navegador suporta a API e se permite compartilhar ARQUIVOS
      if (navigator.canShare && navigator.canShare({ files: [file] })) {
        await navigator.share({
          title: 'Plano de Parto',
          text: 'Segue em anexo o meu Plano de Parto gerado.',
          files: [file]
        });
        console.log('Compartilhamento concluído com sucesso!');
      } else {
        // 2. Fallback para Desktop ou navegadores incompatíveis (faz o download)
        this.downloadFallback(file);
      }
    } catch (error: any) {
      // O erro 'AbortError' ocorre se o usuário cancelar o compartilhamento
      if (error.name !== 'AbortError') {
        console.error('Erro inesperado ao compartilhar:', error);
      }
    } finally {
      this.isSharing = false;
    }
  }

  // Método de fallback para baixar o arquivo tradicionalmente
  private downloadFallback(file: File) {
    const url = window.URL.createObjectURL(file);
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = this.fileName;
    document.body.appendChild(anchor);
    anchor.click();
    
    // Limpeza
    document.body.removeChild(anchor);
    window.URL.revokeObjectURL(url);
  }
}
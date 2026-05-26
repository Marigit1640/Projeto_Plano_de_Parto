import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AudioService } from '../../services/audio.service';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-splash',
  imports: [MatIconModule],
  template: `
    <div class="flex flex-col items-center justify-center min-h-screen relative p-6">
      <div class="flex-1 flex flex-col items-center justify-center text-center animate-pulse">
        <h1 class="text-4xl sm:text-5xl font-display font-bold text-brand-purple-dark leading-tight">
          SEU PARTO,<br/>
          SEU DIREITO,<br/>
          SUA ESCOLHA !
        </h1>
        <div class="flex flex-col items-center justify-center p-6">
  
  <img 
    src="assets/P1 i1.png" 
    alt="Imagem tela inicial" 
    class="w-25 h-25 mx-auto "
  />
</div>
        
     

      
      <button class="audio-btn" (click)="playSound()">
        <mat-icon>volume_up</mat-icon>
      </button>
      <div class="absolute bottom-10 w-full px-6">
         <button class="button-primary font-bold shadow-lg shadow-purple-200" (click)="navigate()">INICIAR</button>
      </div>
    </div>
  `
})
export class SplashComponent {
  private router = inject(Router);
  private audio = inject(AudioService);

  playSound() {
    this.audio.playBubbleSound();
  }

  navigate() {
    this.audio.playBubbleSound();
    this.router.navigate(['/login']);
  }
}

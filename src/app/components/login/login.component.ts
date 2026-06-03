import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AudioService } from '../../services/audio.service';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [MatIconModule, ReactiveFormsModule],
  template: `
    <div class="flex flex-col items-center justify-center min-h-screen p-6 text-center">
      <p class="text-brand-purple font-display font-semibold tracking-widest text-sm uppercase mb-4">SEJA BEM VINDA AO SEU</p>
      <h1 class="text-4xl sm:text-5xl font-display font-bold text-brand-purple-dark leading-none uppercase mb-12">
        PLANO DE<br/>
        PARTO<br/>
        DIGITAL
      </h1>

      <form [formGroup]="loginForm" (ngSubmit)="onSubmit()" class="w-full max-w-sm flex flex-col items-center space-y-6">
        <div class="relative w-full flex items-center">
          <div class="absolute left-0 cursor-pointer text-brand-purple-dark bg-white border-brand-purple border-2 rounded-full p-2 h-14 w-14 flex items-center justify-center z-10 hover:bg-brand-pink-light shadow-md" (click)="playNarration()">
             <mat-icon>volume_up</mat-icon>
          </div>
          <input 
            type="email" 
            formControlName="email"
            placeholder="ENTRAR COM EMAIL" 
            class="pl-16 pr-6 py-4 w-full h-14 border-2 border-brand-purple rounded-full text-sm font-semibold tracking-wide uppercase text-brand-purple-dark focus:outline-none focus:ring-2 focus:ring-brand-purple-light shadow-sm bg-white placeholder-gray-400"
          />
        </div>
        <img 
    src="assets/P3 i3.png" 
    alt="Imagem tela login email" 
    class="w-22 h-22 mx-auto "
  />
        
        <button [disabled]="loginForm.invalid" class="button-primary font-bold shadow-lg mt-8 border-transparent bg-brand-purple text-white hover:bg-brand-purple-dark">CONTINUAR</button>
      </form>
    </div>
  `
})
export class LoginComponent implements OnInit{
  private router = inject(Router);
  private audio = inject(AudioService);
  private fb = inject(FormBuilder);

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]]
  });

  ngOnInit() {
  setTimeout(() => {
    this.audio.playNarration('/audio/A3.1.m4a');
  }, 500);
}

  playNarration() {
  this.audio.playBubbleSound();
  this.audio.playNarration('/audio/A3.2.m4a');
}

  onSubmit() {
  if (this.loginForm.valid) {
    this.audio.stopNarration();
    this.audio.playBubbleSound();
    this.router.navigate(['/wizard']);
  }
}
}




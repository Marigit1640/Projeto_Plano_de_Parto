import { Component, inject, OnInit, signal, computed } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { DEMO_QUESTIONS } from '../../data/questions';
import { AudioService } from '../../services/audio.service';
import { LocalStorageService } from '../../services/local-storage.service';

@Component({
  selector: 'app-wizard',
  imports: [CommonModule, ReactiveFormsModule, MatIconModule],
  template: `
    <div class="flex flex-col items-center min-h-screen p-6 w-full relative pb-24">
       <!-- Top Navigation / Progress (Optional, keeping it clean based on UI) -->
       <div class="w-full flex justify-between items-center mb-6" *ngIf="currentIndex() > 0">
          <button (click)="prev()" class="text-brand-purple p-2" aria-label="Voltar">
             <mat-icon>arrow_back</mat-icon>
          </button>
          <span class="text-brand-purple font-medium text-xs">{{currentIndex() + 1}} / {{questions.length}}</span>
       </div>

       <div *ngIf="currentQuestion() as q" class="w-full max-w-sm flex-1 flex flex-col pt-4 animate-fade-in">
          
          <!-- INFO TYPE -->
          <div *ngIf="q.type === 'info'" class="flex flex-col items-center text-center">
             
             <!-- Optional Logo -->
             <div class="mb-6 rounded bg-white p-2 text-brand-purple-dark text-xs border border-brand-purple/20 shadow-sm" *ngIf="q.id === 'intro'">
                <p class="font-bold">UNIVERSIDADE FEDERAL DE SÃO JOÃO DEL-REI</p>
                <p>CAMPUS CENTRO-OESTE</p>
             </div>

             <h2 *ngIf="q.title" class="text-2xl font-display font-bold text-brand-purple-dark uppercase mb-6">{{q.title}}</h2>
             <p *ngIf="q.text" class="text-sm font-medium text-gray-700 leading-relaxed text-justify mb-8">{{q.text}}</p>
             
             <div *ngIf="q.videoUrl" class="w-full mb-8 rounded-2xl overflow-hidden shadow-lg border-2 border-brand-purple bg-black">
                <video controls class="w-full h-auto aspect-video">
                  <source [src]="q.videoUrl" type="video/mp4">
                  Seu navegador não suporta vídeos.
                </video>
             </div>

             <div class="mt-auto pt-8 w-full flex justify-center">
                <button (click)="next()" class="button-primary bg-brand-purple text-white shadow-xl hover:bg-brand-purple-dark border-none">
                  ENTENDI <mat-icon class="ml-2">check_circle</mat-icon>
                </button>
             </div>
          </div>

          <!-- FORM TYPE -->
          <div *ngIf="q.type === 'form'" class="flex flex-col items-center w-full">
             <h2 class="text-2xl font-display font-bold text-brand-purple-dark uppercase mb-8 text-center">{{q.title}}</h2>
             
             <form *ngIf="formGroup" [formGroup]="formGroup" class="w-full flex flex-col space-y-4">
                <div *ngFor="let field of q.fields" class="relative w-full flex items-center">
                    <div class="absolute left-0 cursor-pointer text-brand-purple-dark bg-white border-brand-purple border-2 rounded-full p-2 h-14 w-14 flex items-center justify-center z-10 hover:bg-brand-pink-light shadow-sm" (click)="playSound()">
                        <mat-icon>volume_up</mat-icon>
                    </div>
                    <input 
                      [type]="field.type" 
                      [formControlName]="field.id"
                      [placeholder]="field.label"
                      class="pl-16 pr-6 w-full h-14 border-2 border-brand-purple rounded-full text-xs font-semibold tracking-wide uppercase text-brand-purple-dark focus:outline-none focus:ring-2 focus:ring-brand-purple-light shadow-sm bg-white placeholder-brand-purple/60"
                    />
                </div>
             </form>
             
             <div class="mt-12 w-full">
                <button (click)="next()" [disabled]="formGroup?.invalid" class="button-primary bg-brand-purple text-white border-transparent">
                  AVANÇAR <mat-icon class="ml-2">arrow_forward</mat-icon>
                </button>
             </div>
          </div>

          <!-- CHOICE TYPE -->
          <div *ngIf="q.type === 'choice'" class="flex flex-col items-center w-full">
             <div class="relative w-full flex flex-col items-center mb-8">
               <div class="absolute left-[-20px] top-[-10px] cursor-pointer text-brand-purple-dark bg-white border-brand-purple border-2 rounded-full p-2 h-16 w-16 flex items-center justify-center z-10 hover:bg-brand-pink-light shadow-md" (click)="playSound()">
                  <mat-icon class="scale-125">volume_up</mat-icon>
               </div>
               <div class="bg-white border-2 border-brand-purple rounded-3xl pt-8 pb-6 px-4 w-full shadow-sm">
                 <h2 class="text-[13px] font-bold text-brand-purple-dark uppercase text-center leading-relaxed">{{q.title}}</h2>
                 <p *ngIf="q.subtitle" class="text-xs text-brand-purple-dark font-medium text-center mt-2">{{q.subtitle}}</p>
               </div>
             </div>

             <div class="flex flex-col w-full space-y-4">
                <ng-container *ngFor="let opt of q.options; let i = index">
                   
                   <div *ngIf="!q.multiple" class="relative w-full flex items-center">
                      <div class="absolute left-0 cursor-pointer text-brand-purple-dark bg-white border-brand-purple border border-r-0 rounded-l-full p-1 h-12 w-12 flex items-center justify-center z-10 hover:bg-brand-pink-light shadow-sm border-r-transparent" (click)="playSound()">
                        <mat-icon class="scale-90 opacity-70">volume_up</mat-icon>
                      </div>
                      <button 
                        (click)="selectSingleChoice(q.id, opt)" 
                        [class.bg-brand-purple]="answers[q.id] === opt"
                        [class.text-white]="answers[q.id] === opt"
                        [class.bg-white]="answers[q.id] !== opt"
                        class="pl-14 pr-4 w-full h-12 border-2 border-brand-purple rounded-full text-[11px] font-bold tracking-wider uppercase text-brand-purple-dark transition-colors text-left flex items-center"
                      >
                         {{opt}}
                      </button>
                   </div>

                   <div *ngIf="q.multiple" class="relative w-full flex items-center group cursor-pointer" (click)="toggleMultiChoice(q.id, opt)">
                      <div class="absolute left-0 text-brand-purple-dark bg-white border-brand-purple border border-r-0 rounded-l-full p-1 h-12 w-12 flex items-center justify-center z-10 group-hover:bg-brand-pink-light transition-colors" (click)="playSound(); $event.stopPropagation()">
                        <mat-icon class="scale-90 opacity-70">volume_up</mat-icon>
                      </div>
                      <div 
                        [class.bg-brand-purple]="isArraySelected(q.id, opt)"
                        [class.text-white]="isArraySelected(q.id, opt)"
                        [class.bg-white]="!isArraySelected(q.id, opt)"
                        class="pl-14 pr-4 w-full min-h-[48px] py-2 border-2 border-brand-purple rounded-full text-[11px] font-bold tracking-wider uppercase text-brand-purple-dark transition-colors text-left flex items-center"
                      >
                         <mat-icon *ngIf="isArraySelected(q.id, opt)" class="mr-2 scale-75">check_circle</mat-icon>
                         {{opt}}
                      </div>
                   </div>

                </ng-container>
             </div>
             
             <div class="mt-8 w-full flex flex-col items-center" *ngIf="q.multiple || (answers[q.id] && answers[q.id] !== '')">
                <button (click)="next()" class="button-primary bg-brand-purple text-white border-transparent">
                  AVANÇAR <mat-icon class="ml-2">arrow_forward</mat-icon>
                </button>
             </div>
          </div>
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
export class WizardComponent implements OnInit {
  private router = inject(Router);
  private audio = inject(AudioService);
  private storage = inject(LocalStorageService);
  private fb = inject(FormBuilder);

  questions = DEMO_QUESTIONS;
  currentIndex = signal<number>(0);
  
  currentQuestion = computed(() => this.questions[this.currentIndex()]);
  
  answers: Record<string, any> = {};
  formGroup: FormGroup | null = null;

  ngOnInit() {
    const saved = this.storage.getData('plano_parto');
    if (saved) {
      this.answers = saved;
    }
    this.buildFormContext();
  }

  playSound() {
    this.audio.playBubbleSound();
  }

  buildFormContext() {
    const q = this.currentQuestion();
    if (q.type === 'form') {
      const group: any = {};
      q.fields?.forEach(f => {
         group[f.id] = [this.answers[f.id] || '', Validators.required];
      });
      this.formGroup = this.fb.group(group);
    } else {
      this.formGroup = null;
    }
  }

  selectSingleChoice(questionId: string, option: string) {
    this.audio.playBubbleSound();
    this.answers[questionId] = option;
    this.saveProgress();
    // Auto advance on single choice might be jarring if they misclick. Let's let them click avanÇar, or auto-advance after small delay.
    // Given the UI shows they select and then continue, actually wait, the images don't always show continue button. Let's just auto-advance after 400ms.
    setTimeout(() => this.next(), 400); 
  }

  toggleMultiChoice(questionId: string, option: string) {
    this.audio.playBubbleSound();
    let current = this.answers[questionId];
    if (!Array.isArray(current)) {
      current = [];
    }
    const idx = current.indexOf(option);
    if (idx > -1) {
      current.splice(idx, 1);
    } else {
      current.push(option);
    }
    this.answers[questionId] = current;
    this.saveProgress();
  }

  isArraySelected(questionId: string, option: string): boolean {
    const current = this.answers[questionId];
    if (Array.isArray(current)) {
      return current.includes(option);
    }
    return false;
  }

  saveProgress() {
    this.storage.saveData('plano_parto', this.answers);
  }

  next() {
    this.audio.playBubbleSound();
    const q = this.currentQuestion();
    
    // Save form data 
    if (q.type === 'form' && this.formGroup) {
      if (this.formGroup.invalid) return; // Prevent advancing
      const vals = this.formGroup.value;
      Object.assign(this.answers, vals);
      this.saveProgress();
    }

    if (this.currentIndex() < this.questions.length - 1) {
       this.currentIndex.update(v => v + 1);
       this.buildFormContext();
    } else {
       // navigate to final screen
       this.router.navigate(['/final']);
    }
  }

  prev() {
    this.audio.playBubbleSound();
    if (this.currentIndex() > 0) {
      this.currentIndex.update(v => v - 1);
      this.buildFormContext();
    }
  }
}

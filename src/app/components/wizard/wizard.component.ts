import { Component, inject, OnInit, signal, computed } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { DEMO_QUESTIONS } from '../../data/questions';
import { AudioService } from '../../services/audio.service';
import { LocalStorageService } from '../../services/local-storage.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-wizard',
  imports: [CommonModule, ReactiveFormsModule, MatIconModule],
  template: `
    <div class="flex flex-col items-center min-h-screen p-6 w-full relative pb-40">
        <!-- Top Navigation / Progress -->
        <div class="w-full flex justify-between items-center mb-6" *ngIf="currentIndex() > 0">
           <button (click)="prev()" class="text-brand-purple p-2" aria-label="Voltar">
              <mat-icon>arrow_back</mat-icon>
           </button>
           <span class="text-brand-purple font-medium text-xs">{{currentIndex() + 1}} / {{questions.length}}</span>
        </div>

        <div *ngIf="currentQuestion() as q" class="w-full max-w-sm flex-1 flex flex-col pt-4 animate-fade-in">
           
           <!-- INFO TYPE -->
           <div *ngIf="q.type === 'info'" class="flex flex-col items-center text-center w-full relative">
              
              <!-- Optional Logo -->
             <div
  *ngIf="q.id === 'presentation' || q.id === 'developers'"
  class="mb-8 flex items-center justify-center gap-2"
>
  <div class="fixed bottom-8 right-8 z-50">
  <button
    class="audio-btn"
    (click)="playQuestionAudio()">

    <mat-icon>volume_up</mat-icon>

  </button>
</div>
 <img
  [src]="q.image"
  class="w-20 h-20 object-contain flex-shrink-0"
  alt="Logo"
/>

  <div class="text-brand-purple-dark uppercase leading-tight">

  <ng-container *ngIf="q.id === 'presentation'">
    <p class="font-semibold italic text-sm">UNIVERSIDADE FEDERAL</p>
    <p class="font-semibold italic text-sm">DE SÃO JOÃO DEL-REI</p>
    <p class="font-semibold italic text-sm">CAMPUS CENTRO-OESTE</p>
  </ng-container>

  <ng-container *ngIf="q.id === 'developers'">
    <p class="font-semibold italic text-sm">CEFET-MG</p>
    <p class="font-semibold italic text-sm">CAMPUS DIVINÓPOLIS</p>
  </ng-container>

</div>

</div>
              <!-- ADICIONADO: Imagem para o tipo INFO -->
              

              <h2 *ngIf="q.title" class="text-2xl font-display font-bold text-brand-purple-dark uppercase mb-6">{{q.title}}</h2>
              <p *ngIf="q.text" class="text-sm font-medium text-gray-700 leading-relaxed text-justify mb-8">{{q.text}}</p>
              

              <div
  *ngIf="q.image && q.id !== 'presentation' && q.id !== 'developers'"
  class="relative self-start mt-4"
>

  <div
    *ngIf="$any(q).videoUrl"
    class="flex flex-col items-center mb-2"
  >
    <p class="text-xs font-bold text-brand-purple whitespace-nowrap">
      CLIQUE AQUI E SAIBA MAIS
    </p>

    <img
    src="assets/seta.jpg"
    alt="Seta"
    class="w-20 mt-1"
  />
  </div>

  <img
    [src]="q.image"
    [style.width]="$any(q).width || '140px'"
    class="object-contain cursor-pointer"
    alt="Imagem explicativa"
    (click)="openVideo($any(q).videoUrl)"
  />

</div>
<div class="mt-auto pt-8 w-full flex justify-center">
<div class="fixed bottom-6 right-6 z-50">
  <button
    class="audio-btn"
    (click)="playQuestionAudio()">
    <mat-icon>volume_up</mat-icon>
  </button>
</div>
                 <button (click)="next()" class="button-primary bg-brand-purple text-white shadow-xl hover:bg-brand-purple-dark border-none">

  {{ q.id === 'maternity_intro' ? 'COMEÇAR' : 'ENTENDI' }}

  <mat-icon class="ml-2">check_circle</mat-icon>
</button>
              </div>
           </div>

           <!-- FORM TYPE -->
           <div *ngIf="q.type === 'form'" class="flex flex-col items-center w-full">

              <h2 class="text-2xl font-display font-bold text-brand-purple-dark uppercase mb-8 text-center">{{q.title}}</h2>
              
              <form *ngIf="formGroup" [formGroup]="formGroup" class="w-full flex flex-col space-y-4">
                 <div *ngFor="let field of q.fields" class="relative w-full flex items-center">
                     <div class="absolute left-0 top-1/2 -translate-y-1/2 cursor-pointer text-brand-purple-dark bg-white border-brand-purple border-2 rounded-full p-2 h-14 w-14 flex items-center justify-center z-10 hover:bg-brand-pink-light shadow-sm" (click)="playFieldAudio(field)">
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
<div
  *ngIf="$any(q).videoUrl"
  class="flex flex-col items-start mb-2"
>
  <p class="text-xs font-bold text-brand-purple">
    CLIQUE AQUI E SAIBA MAIS
  </p>

  <img
    src="assets/seta.jpg"
    alt="Seta"
    class="w-20 mt-1"
  />
</div>
              <img
  *ngIf="q.image"
  [src]="q.image"
  [style.width]="$any(q).width || '140px'"
  class="object-contain cursor-pointer"
  (click)="openVideo($any(q).videoUrl)"
  [style.marginLeft]="$any(q).left"
  [style.marginTop]="$any(q).top"
  alt="Imagem do formulário"
/>
              
              <div class="mt-12 w-full">
                 <button (click)="next()" [disabled]="formGroup?.invalid" class="button-primary bg-brand-purple text-white border-transparent">
                   AVANÇAR <mat-icon class="ml-2">arrow_forward</mat-icon>
                 </button>
              </div>
           </div>

           <!-- CHOICE TYPE -->
           <div *ngIf="q.type === 'choice'" class="flex flex-col items-center w-full">
              
              <!-- ADICIONADO: Imagem para o tipo CHOICE (caso decida colocar imagem nestas telas no futuro) -->
              
              <div class="relative w-full flex flex-col items-center mb-8">
               <div
  class="absolute left-[-20px] top-[-10px] cursor-pointer text-brand-purple-dark bg-white border-brand-purple border-2 rounded-full p-2 h-16 w-16 flex items-center justify-center z-10 hover:bg-brand-pink-light shadow-md"
  (click)="playQuestionAudio()">

   <mat-icon class="scale-125">volume_up</mat-icon>

</div>
                <div class="bg-white border-2 border-brand-purple rounded-3xl py-6 px-6 w-full shadow-sm">
                  <h2 class="text-[13px] font-bold text-brand-purple-dark uppercase text-center leading-relaxed px-4">{{q.title}}</h2>
                  <p *ngIf="q.subtitle" class="text-xs text-brand-purple-dark font-medium text-center mt-2">{{q.subtitle}}</p>
                </div>
              </div>
              

              <div class="flex flex-col w-full space-y-4">
                 <ng-container *ngFor="let opt of q.options; let i = index">
                    
<div class="relative w-full flex items-center">

  <div
    class="absolute left-[-12px] top-1/2 -translate-y-1/2
           cursor-pointer text-brand-purple-dark
           bg-white border-brand-purple border-2
           rounded-full h-14 w-14
           flex items-center justify-center
           z-10 shadow-md"
    (click)="playOptionAudio(opt); $event.stopPropagation()">

    <mat-icon class="scale-90">
      volume_up
    </mat-icon>

  </div>

  <button
    (click)="q.multiple
      ? toggleMultiChoice(q.id, opt.texto)
      : selectSingleChoice(q.id, opt.texto)"
    [class.bg-brand-purple]="
  q.multiple
    ? isArraySelected(q.id, opt.texto)
    : answers[q.id] === opt.texto
"

[class.text-white]="
  q.multiple
    ? isArraySelected(q.id, opt.texto)
    : answers[q.id] === opt.texto
"

[class.bg-white]="
  q.multiple
    ? !isArraySelected(q.id, opt.texto)
    : answers[q.id] !== opt.texto
"
    class="pl-20 pr-4 w-full h-12
       border-2 border-brand-purple
       rounded-full
       text-[11px] font-bold
       tracking-wider uppercase
       transition-colors
       text-left flex items-center">

    {{opt.texto}}

  </button>

</div>

  <img
    *ngIf="$any(opt).imagem"
    [src]="$any(opt).imagem"
    [style.width]="$any(opt).width || '140px'"
    class="object-contain mx-auto my-2 cursor-pointer"
    (click)="$any(opt).videoUrl && openVideo($any(opt).videoUrl)"
    [style.marginTop]="$any(opt).top"
    alt="Imagem da opção"
  />

                 </ng-container>
              </div>
              <div *ngIf="q.image" class="relative">

<div
  *ngIf="$any(q).videoUrl"
  class="flex flex-col items-center mb-4 mt-4"
>
  <p class="text-xs font-bold text-brand-purple">
    CLIQUE AQUI E SAIBA MAIS
  </p>

  <img
    src="assets/seta.jpg"
    alt="Seta"
    class="w-20 mt-1"
  />
</div>


  <img
  [src]="q.image"
  [style.width]="$any(q).width || '140px'"
  [style.marginTop]="$any(q).top"
  [style.marginLeft]="$any(q).imagePosition === 'right' ? '25px' : 'auto'"
  [style.marginRight]="$any(q).imagePosition === 'center' ? 'auto' : null"
  class="object-contain mt-6 cursor-pointer mx-auto block"
  alt="Imagem da pergunta"
  (click)="$any(q).videoUrl && openVideo($any(q).videoUrl)"
/>

</div>
              <div
  class="mt-8 w-full flex flex-col items-center"
  *ngIf="
    q.multiple
      ? (answers[q.id]?.length > 0)
      : (answers[q.id] && answers[q.id] !== '')
  ">
                 <button (click)="next()" class="button-primary bg-brand-purple text-white border-transparent">
                   AVANÇAR <mat-icon class="ml-2">arrow_forward</mat-icon>
                 </button>
              </div>
           </div>
        </div>
        <!-- RODAPÉ -->

<div class="fixed bottom-4 left-0 w-full flex justify-center z-40">

  <div class="w-full max-w-sm px-6">

    <div class="flex items-center">

      <div class="flex-1 h-px bg-brand-purple opacity-75"></div>

      <mat-icon
        class="mx-4 text-brand-purple opacity-100 text-[14px]">

        favorite_border

      </mat-icon>

      <div class="flex-1 h-px bg-brand-purple opacity-50"></div>

    </div>

    <p
      class="text-center mt-1 text-[11px] tracking-wide text-brand-purple opacity-115">

      UFSJ • CEFET-MG

    </p>

  </div>

</div>
<div
  *ngIf="videoModalOpen()"
  class="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">

  <div class="bg-white rounded-2xl p-4 w-full max-w-3xl relative">

    <button
      (click)="closeVideo()"
      class="absolute top-2 right-2 text-xl">
      ✕
    </button>

    <iframe
      class="w-full h-[400px]"
      [src]="videoUrl"
      allowfullscreen>
    </iframe>

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
  private sanitizer = inject(DomSanitizer);

  questions = DEMO_QUESTIONS;
  currentIndex = signal<number>(0);

  currentQuestion = computed(() => this.questions[this.currentIndex()]);

  answers: Record<string, any> = {};
  formGroup: FormGroup | null = null;
  videoModalOpen = signal(false);
  videoUrl: SafeResourceUrl | null = null;

  ngOnInit() {
    const saved = this.storage.getData('plano_parto');
    if (saved) {
      this.answers = saved;
    }
    this.buildFormContext();
    this.playAutoAudio();
  }

  playSound() {
    this.audio.playBubbleSound();
  }

  playQuestionAudio() {
  const q: any = this.currentQuestion();

  this.audio.playBubbleSound();

  const audio = q.audioUrl || q.autoAudioUrl;

  if (audio) {
    this.audio.playNarration(audio);
  }
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
      this.playAutoAudio();
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
    this.playAutoAudio();
  }
}

  playAutoAudio() {
  const q: any = this.currentQuestion();

  if (q.autoAudioUrl) {
    setTimeout(() => {
      this.audio.playNarration(q.autoAudioUrl);
    }, 500);
  }
}

playOptionAudio(option: any) {
  this.audio.playBubbleSound();

  if (option.audioUrl) {
    this.audio.playNarration(option.audioUrl);
  }
}
playFieldAudio(field: any) {
  this.audio.playBubbleSound();

  if (field.audioUrl) {
    this.audio.playNarration(field.audioUrl);
  }
}

openVideo(url: string) {
  let embedUrl = url;

  if (url.includes('youtu.be/')) {
    const videoId = url.split('youtu.be/')[1].split('?')[0];
    embedUrl = `https://www.youtube.com/embed/${videoId}`;
  }

  if (url.includes('watch?v=')) {
    const videoId = url.split('watch?v=')[1].split('&')[0];
    embedUrl = `https://www.youtube.com/embed/${videoId}`;
  }

  this.videoUrl =
    this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl);

  this.videoModalOpen.set(true);
}

closeVideo() {
  this.videoModalOpen.set(false);

  setTimeout(() => {
    this.videoUrl = null;
  }, 100);
}
}

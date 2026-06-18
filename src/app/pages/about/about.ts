import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, MatIconModule],

  template: `
<div class="flex flex-col items-center min-h-screen p-6 w-full relative pb-40">

  <div class="w-full flex justify-between items-center mb-6">

    <button
      (click)="voltar()"
      class="text-brand-purple p-2">

      <mat-icon>arrow_back</mat-icon>

    </button>

  </div>

  <div
    class="w-full max-w-sm flex-1 flex flex-col pt-4 animate-fade-in">

    <!-- Logo -->

    <div
      class="mb-8 flex items-center justify-center gap-2">

      <img
        src="assets/CEFET-MG_logo.png"
        class="w-20 h-20 object-contain">

      <div
        class="text-brand-purple-dark uppercase leading-tight">

        <p class="font-semibold italic text-sm">
          QUEM SOMOS NÓS
        </p>

      </div>

    </div>

    <!-- Texto -->

    <p
      class="text-sm font-medium text-gray-700 leading-relaxed text-justify mb-8">

      Projeto desenvolvido pelas alunas Ana Laura Cândida Cajueiro da Silva e Mariana Maria Marques Ferreira sob a orientação da coordenadora dos cursos técnicos do Departamento de Computação do campus Divinópolis, Thabatta Moreira Alves de Araújo e do professor Roberth Oliveira Corgosinho.

    </p>

    <!-- Fotos -->

    <!-- <img
      src="assets/equipe.jpg"
      class="rounded-xl mb-4">

    <img
      src="assets/cefet.jpg"
      class="rounded-xl mb-4">

    <img
      src="assets/ufsj.jpg"
      class="rounded-xl mb-4">
-->
  </div>

</div>
`
})
export class AboutComponent {

  private router = inject(Router);

  voltar() {
    this.router.navigate(['/final']);
  }

}
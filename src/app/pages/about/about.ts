import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, MatIconModule],

  template: `
<div
  class="flex flex-col items-center min-h-screen p-6 w-full relative pb-20
         bg-gradient-to-b from-pink-100 via-pink-50 to-white">

  <!-- Botão voltar -->
  <div class="w-full flex justify-between items-center mb-6">

    <button
      (click)="voltar()"
      class="text-brand-purple p-2">

      <mat-icon>arrow_back</mat-icon>

    </button>

  </div>

  <div
    class="w-full max-w-md flex-1 flex flex-col pt-4 animate-fade-in">

    <!-- Logo e Título -->

<div
  class="mb-8 flex items-center justify-center gap-6">

  <img
    src="assets/CEFET-MG_logo.png"
    alt="CEFET-MG"
    class="w-20 h-20 object-contain">

  <img
    src="assets/P2 i2.png"
    alt="UFSJ"
    class="w-20 h-20 object-contain">

</div>

<h1
  class="font-bold italic text-2xl text-brand-purple-dark text-center mb-8">
  Quem somos nós?
</h1>

    <!-- Texto -->
    <p
      class="text-sm font-medium text-gray-700 leading-relaxed text-justify mb-8">

      Projeto desenvolvido pelas alunas Ana Laura Cândida Cajueiro da Silva e
      Mariana Maria Marques Ferreira sob a orientação da coordenadora dos cursos
      técnicos do Departamento de Computação do campus Divinópolis,
      Thabatta Moreira Alves de Araújo e do professor
      Roberth Oliveira Corgosinho.

    </p>

    <!-- Equipe -->
    <div class="flex flex-col gap-5">

      <!-- Pessoa 1 -->
      <div
        class="bg-white/90
       rounded-3xl
       p-4
       shadow-md
       border
       border-pink-100
       flex
       items-center
       gap-4
       hover:scale-[1.02]
       hover:shadow-lg
       transition-all
       duration-300">

        <img
          src="assets/MarianaS.JPEG.jpeg"
          alt="Mariana Simplício"
          class="w-28 h-28 rounded-full
       border-2 border-pink-200
       ring-2 ring-pink-100
       bg-white
       p-1
       shadow-sm
       object-cover
       hover:scale-105
       transition-transform
       duration-300">

        <div>
          <h3 class="font-bold text-brand-purple-dark text-base">
            Mariana Simplício
          </h3>

          <p class="text-sm text-gray-600 leading-relaxed">
            Graduanda em Enfermagem - Universidade Federal de São João del-Rei (UFSJ).
            <br>
            Membro da equipe de desenvolvimento do aplicativo.
          </p>
        </div>

      </div>

      <!-- Pessoa 2 -->
      <div
        class="bg-white/90
       rounded-3xl
       p-4
       shadow-md
       border
       border-pink-100
       flex
       items-center
       gap-4
       hover:scale-[1.02]
       hover:shadow-lg
       transition-all
       duration-300">

        <img
          src="assets/LuisF.JPEG.jpeg"
          alt="Luis Fernando Luciano do Carmo"
          class="w-28 h-28 rounded-full
       border-2 border-pink-200
       ring-2 ring-pink-100
       bg-white
       p-1
       shadow-sm
       object-cover
       hover:scale-105
       transition-transform
       duration-300">

        <div>
          <h3 class="font-bold text-brand-purple-dark text-base">
            Luis Fernando Luciano do Carmo
          </h3>

          <p class="text-sm text-gray-600 leading-relaxed">
            Graduando em Enfermagem - Universidade Federal de São João del-Rei (UFSJ).
            <br>
            Membro da equipe de desenvolvimento do aplicativo.
          </p>
        </div>

      </div>

      <!-- Pessoa 3 -->
      <div
        class="bg-white/90
       rounded-3xl
       p-4
       shadow-md
       border
       border-pink-100
       flex
       items-center
       gap-4
       hover:scale-[1.02]
       hover:shadow-lg
       transition-all
       duration-300">

        <img
          src="assets/VitoriaC.JPEG.jpeg"
          alt="Vitória Caroline Silva Bailon"
          class="w-28 h-28 rounded-full
       border-2 border-pink-200
       ring-2 ring-pink-100
       bg-white
       p-1
       shadow-sm
       object-cover
       hover:scale-105
       transition-transform
       duration-300">

        <div>
          <h3 class="font-bold text-brand-purple-dark text-base">
            Vitória Caroline Silva Bailon
          </h3>

          <p class="text-sm text-gray-600 leading-relaxed">
            Graduanda em Enfermagem - Universidade Federal de São João del-Rei (UFSJ).
            <br>
            Membro da equipe de desenvolvimento do aplicativo.
          </p>
        </div>

      </div>

    </div>

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
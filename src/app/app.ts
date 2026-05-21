import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {MatIconModule} from '@angular/material/icon';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-root',
  imports: [RouterOutlet, MatIconModule],
  template: `
    <main class="w-full max-w-md mx-auto bg-white min-h-screen shadow-2xl relative overflow-x-hidden">
      <!-- Top Decorator -->
      <div class="absolute top-0 w-full h-8 bg-brand-purple"></div>
      
      <div class="pt-8 min-h-screen">
         <router-outlet></router-outlet>
      </div>
    </main>
  `,
  styleUrl: './app.css',
})
export class App {}

import {Routes} from '@angular/router';
import { SplashComponent } from './components/splash/splash.component';
import { LoginComponent } from './components/login/login.component';
import { WizardComponent } from './components/wizard/wizard.component';
import { FinalComponent } from './components/final/final.component';
import { AboutComponent } from './pages/about/about';

export const routes: Routes = [
  { path: '', component: SplashComponent },
  { path: 'login', component: LoginComponent },
  { path: 'wizard', component: WizardComponent },
  { path: 'final', component: FinalComponent },
   {
  path: 'about',
  component: AboutComponent
},
  { path: '**', redirectTo: '' }
];

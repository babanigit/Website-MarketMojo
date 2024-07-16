import { Routes } from '@angular/router';
import { SwitchpageComponent } from './pages/switchpage/switchpage.component';
import { VerdictpageComponent } from './pages/verdictpage/verdictpage.component';

export const routes: Routes = [
  {path:"switch",component:SwitchpageComponent},
  {path:"verdict",component:VerdictpageComponent}
];

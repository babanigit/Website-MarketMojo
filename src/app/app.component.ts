import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { Verdict1Component } from './components/verdict1/verdict1.component';
import { Verdict2Component } from './components/verdict2/verdict2.component';
import { Verdict3Component } from './components/verdict3/verdict3.component';
import { CommonModule } from '@angular/common';
import { ResearchServiceComponent } from './components/research-service/research-service.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MainComponent,
    CommonModule,
    Verdict1Component,
    Verdict2Component,
    Verdict3Component,
    ResearchServiceComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'website-mm';
}

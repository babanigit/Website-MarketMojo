import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { Verdict1Component } from './components/verdict1/verdict1.component';
import { Verdict2Component } from './components/verdict2/verdict2.component';
import { Verdict3Component } from './components/verdict3/verdict3.component';
import { CommonModule } from '@angular/common';
import { ResearchServiceComponent } from './components/research-service/research-service.component';
import { VerdictreportComponent } from './components/verdictreport/verdictreport.component';
import { ReportResponse } from './assets/getRespone';
// import { IReport_Response } from './model/ReportResponse';
import { FilterReportPipe } from './pipe/filter-report.pipe';
import { VerdictfooterComponent } from './components/verdictfooter/verdictfooter.component';

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
    VerdictreportComponent,
    FilterReportPipe,
    VerdictfooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'website-mm';
  ReportResponse = ReportResponse;
  inputData: string = '';
  boxState = false;

  recievedDataEvent(e: string) {
    this.inputData = e;
  }

  recievedDataEvent2(e: boolean) {
    this.boxState = e;
  }

  recievedStateEvent(e: boolean) {
    this.boxState = e;
  }
}

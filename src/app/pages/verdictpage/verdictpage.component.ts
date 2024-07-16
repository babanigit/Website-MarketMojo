import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MainComponent } from '../../components/main/main.component';
import { ResearchServiceComponent } from '../../components/research-service/research-service.component';
import { Verdict1Component } from '../../components/verdict1/verdict1.component';
import { Verdict2Component } from '../../components/verdict2/verdict2.component';
import { Verdict3Component } from '../../components/verdict3/verdict3.component';
import { VerdictfooterComponent } from '../../components/verdictfooter/verdictfooter.component';
import { VerdictloadingComponent } from '../../components/verdictloading/verdictloading.component';
import { VerdictreportComponent } from '../../components/verdictreport/verdictreport.component';
import { FilterReportPipe } from '../../pipe/filter-report.pipe';

import { ReportResponse } from '../../assets/getRespone';

@Component({
  selector: 'app-verdictpage',
  standalone: true,
  imports: [
    MainComponent,
    CommonModule,
    Verdict1Component,
    Verdict2Component,
    Verdict3Component,
    ResearchServiceComponent,
    VerdictreportComponent,
    FilterReportPipe,
    VerdictfooterComponent,
    VerdictloadingComponent
  ],
  templateUrl: './verdictpage.component.html',
  styleUrl: './verdictpage.component.css'
})
export class VerdictpageComponent {

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

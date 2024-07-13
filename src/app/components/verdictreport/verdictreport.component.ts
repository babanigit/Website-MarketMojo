import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IReport_Response } from '../../model/ReportResponse';

@Component({
  selector: 'app-verdictreport',
  standalone: true,
  imports: [],
  templateUrl: './verdictreport.component.html',
  styleUrl: './verdictreport.component.css',
})
export class VerdictreportComponent {


  @Output() myEvent2 = new EventEmitter<boolean>();

  @Input() reportData!: IReport_Response; //props

  onClose() {
    this.myEvent2.emit(true);
  }
}

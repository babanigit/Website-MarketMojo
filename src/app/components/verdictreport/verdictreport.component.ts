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

  constructor(){
    this.myEvent.emit(false);

  }

  @Output() myEvent = new EventEmitter<boolean>();

  @Input() reportData!: IReport_Response; //props

  onClose() {
    this.myEvent.emit(true);
  }
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-verdictreport',
  standalone: true,
  imports: [],
  templateUrl: './verdictreport.component.html',
  styleUrl: './verdictreport.component.css'
})
export class VerdictreportComponent {

@Input()sname!:string;

}

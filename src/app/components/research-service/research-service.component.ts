import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FilterPipe } from '../../pipe/filter.pipe';
import { FormsModule } from '@angular/forms';
import { data } from '../../assets/data';

@Component({
  selector: 'app-research-service',
  standalone: true,
  imports: [FormsModule, CommonModule, FilterPipe],
  templateUrl: './research-service.component.html',
  styleUrl: './research-service.component.css',
})
export class ResearchServiceComponent {

  @Output() myEvent = new EventEmitter<string>();

  inputVal = 'hdfc';
  data = data;
  trClicked(strId: string) {
    console.log("hello id ", strId)
  }

  OnHandleClick() {
    console.log('hello there input value have sended', this.inputVal);
    this.myEvent.emit(this.inputVal);
  }


}

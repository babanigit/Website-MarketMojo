import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
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
  // inputValue:string=" ";

  inputVal = '';
  data = data;
  trClicked(strId:string){
    console.log("hello id ", strId)
  }

  onHandleChange(e: Event) {
    //two ways data binding with using [(ngModel)]
    const value = (e.target as HTMLInputElement).value;
    this.inputVal = value;
    console.log(this.inputVal);
  }

  OnHandleClick() {
    console.log('hello there', this.inputVal);
  }

  hdfc = [
    {
      Id: 592009,
      Company: '<b>HDFC</b> Bank Ltd.',
      ScriptCode: 500180,
      Symbol: 'HDFCBANK',
      url: 'https://www.marketsmojo.com/stocks-analysis/hdfc-bank-592009-0',
      price: null,
      ExchangeName: 'bse',
      sname: 'HDFC Bank',
      tag: 'Stock',
      stockprice: '1608.50',
      chg: '-17.75',
      chgp: '-1.09',
      chgdir: -1,
      score: 88,
      scoretext: 'Strong Buy',
      stock_traded_status: 'Active',
      show_score: 1,
      recurl: '',
    },
    {
      Id: 592009,
      Company: '<b>HDFC</b> Bank Ltd.',
      ScriptCode: 500180,
      Symbol: 'HDFCBANK',
      url: 'https://www.marketsmojo.com/news/hdfc-bank-ltd-592009',
      price: null,
      ExchangeName: 'bse',
      sname: 'HDFC Bank',
      tag: 'News',
      stockprice: '1608.50',
      chg: '-17.75',
      chgp: '-1.09',
      chgdir: -1,
      score: 88,
      scoretext: 'Strong Buy',
      stock_traded_status: 'Active',
      show_score: 1,
      recurl: '',
    },
    {
      Id: 1002872,
      Company: '<b>HDFC</b> Life Insurance Company Ltd',
      ScriptCode: 540777,
      Symbol: 'HDFCLIFE',
      url: 'https://www.marketsmojo.com/stocks-analysis/hdfc-life-insurance-company-1002872-0',
      price: null,
      ExchangeName: 'bse',
      sname: 'HDFC Life Insur.',
      tag: 'Stock',
      stockprice: '635.50',
      chg: '2.85',
      chgp: '0.45',
      chgdir: 1,
      score: 51,
      scoretext: 'Hold',
      stock_traded_status: 'Active',
      show_score: 1,
      recurl: '',
    },
    {
      Id: 1002872,
      Company: '<b>HDFC</b> Life Insurance Company Ltd',
      ScriptCode: 540777,
      Symbol: 'HDFCLIFE',
      url: 'https://www.marketsmojo.com/news/hdfc-life-insurance-company-ltd-1002872',
      price: null,
      ExchangeName: 'bse',
      sname: 'HDFC Life Insur.',
      tag: 'News',
      stockprice: '635.50',
      chg: '2.85',
      chgp: '0.45',
      chgdir: 1,
      score: 51,
      scoretext: 'Hold',
      stock_traded_status: 'Active',
      show_score: 1,
      recurl: '',
    },
    {
      Id: 1003028,
      Company: '<b>HDFC</b> Asset Management Company Ltd',
      ScriptCode: '541729',
      Symbol: 'HDFCAMC',
      url: 'https://www.marketsmojo.com/stocks-analysis/hdfc-asset-management-company-1003028-0',
      price: null,
      ExchangeName: 'bse',
      sname: 'HDFC AMC',
      tag: 'Stock',
      stockprice: '4156.85',
      chg: '10.05',
      chgp: '0.24',
      chgdir: 1,
      score: 78,
      scoretext: 'Buy',
      stock_traded_status: 'Active',
      show_score: 1,
      recurl: '',
    },
    {
      Id: 1003028,
      Company: '<b>HDFC</b> Asset Management Company Ltd',
      ScriptCode: '541729',
      Symbol: 'HDFCAMC',
      url: 'https://www.marketsmojo.com/news/hdfc-asset-management-company-ltd-1003028',
      price: null,
      ExchangeName: 'bse',
      sname: 'HDFC AMC',
      tag: 'News',
      stockprice: '4156.85',
      chg: '10.05',
      chgp: '0.24',
      chgdir: 1,
      score: 78,
      scoretext: 'Buy',
      stock_traded_status: 'Active',
      show_score: 1,
      recurl: '',
    },
    {
      Id: 741664,
      Company:
        'Housing Development Finance CorporationLtd(Merged) - <b>HDFC</b>',
      ScriptCode: 500010,
      Symbol: 'HDFC',
      url: 'https://www.marketsmojo.com/stocks-analysis/housing-development-finance-corporationltdmerged-741664-0',
      price: null,
      ExchangeName: 'bse',
      sname: 'H D F C',
      tag: 'Stock',
      stockprice: '',
      chg: '',
      chgp: '',
      chgdir: '',
      score: '',
      scoretext: '',
      stock_traded_status: 'Not Traded',
      show_score: 1,
      recurl: '',
    },
    {
      Id: 741664,
      Company:
        'Housing Development Finance CorporationLtd(Merged) - <b>HDFC</b>',
      ScriptCode: 500010,
      Symbol: 'HDFC',
      url: 'https://www.marketsmojo.com/news/housing-development-finance-corporationltd-merged--741664',
      price: null,
      ExchangeName: 'bse',
      sname: 'H D F C',
      tag: 'News',
      stockprice: '',
      chg: '',
      chgp: '',
      chgdir: '',
      score: '',
      scoretext: '',
      stock_traded_status: 'Not Traded',
      show_score: 1,
      recurl: '',
    },
  ];
}

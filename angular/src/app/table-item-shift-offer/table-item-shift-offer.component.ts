import { Component, Input, OnInit } from '@angular/core';
import { ShiftOfferListDto } from '@shared/service-proxies/service-proxies';

@Component({
  selector: 'app-table-item-shift-offer',
  templateUrl: './table-item-shift-offer.component.html',
  styleUrls: ['./table-item-shift-offer.component.css']
})
export class TableItemShiftOfferComponent implements OnInit {

  @Input() shiftList : ShiftOfferListDto[] = [];
  constructor() { }

  ngOnInit(): void {
    
  }
  get(){
    console.log(this.shiftList);
  }
}

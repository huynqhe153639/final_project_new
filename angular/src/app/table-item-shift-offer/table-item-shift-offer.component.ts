import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ShiftOfferModalComponent } from '@app/shift-offer-modal/shift-offer-modal.component';
import { ShiftOfferListDto } from '@shared/service-proxies/service-proxies';

@Component({
  selector: 'app-table-item-shift-offer',
  templateUrl: './table-item-shift-offer.component.html',
  styleUrls: ['./table-item-shift-offer.component.css']
})
export class TableItemShiftOfferComponent  implements OnInit {

  @Input() shiftList : ShiftOfferListDto[] = [];
  @ViewChild('shiftModal') shiftModal : ShiftOfferModalComponent;
  constructor() { }

  ngOnInit(): void {

  }
  getCheck() : boolean{
    if(this.shiftList.length > 0){
      return true;
    }else{
      return false;
    }
  }

  openModal(type : string){
    this.shiftModal.show(type);
  }

}

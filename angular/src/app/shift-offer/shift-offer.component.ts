import { Component, Injector, OnInit } from '@angular/core';
import { AppComponentBase } from '@shared/app-component-base';
import { ShiftOfferListDto, ShiftOfferServiceProxy } from '@shared/service-proxies/service-proxies';
import * as console from 'console';

@Component({
  selector: 'app-shift-offer',
  templateUrl: './shift-offer.component.html',
  styleUrls: ['./shift-offer.component.css']
})
export class ShiftOfferComponent extends AppComponentBase implements OnInit {

  messages : any[];
  shiftOffer : ShiftOfferListDto[] = [];
  constructor(injector : Injector, private shiftService: ShiftOfferServiceProxy) {
    super(injector);
  }

  ngOnInit(): void {
     this.shiftService.getAllShift().subscribe(result => {
      this.shiftOffer = result.items;
    });
  }
  
  buttonWeek(days:any[]){
    this.messages = days;
  }

}

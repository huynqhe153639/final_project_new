import { Component, Input, OnInit } from '@angular/core';
import { RosterAndAvaiListDtos } from '@shared/service-proxies/service-proxies';

@Component({
  selector: 'app-table-item-availability',
  templateUrl: './table-item-availability.component.html',
  styleUrls: ['./table-item-availability.component.css']
})
export class TableItemAvailabilityComponent implements OnInit {

  constructor() { }

  @Input() avaib : RosterAndAvaiListDtos[];

  ngOnInit(): void {
  }

  getCheck() : boolean{
    if(this.avaib.length > 0){
      return true;
    }else{
     return false;
    }
  }
  

}

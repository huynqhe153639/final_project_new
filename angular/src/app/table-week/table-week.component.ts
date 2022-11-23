import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ShiftOfferListDto } from '@shared/service-proxies/service-proxies';
import * as moment  from 'moment';


@Component({
  selector: 'app-table-week',
  templateUrl: './table-week.component.html',
  styleUrls: ['./table-week.component.css']
})
export class TableWeekComponent {

  constructor() { }

  days: any[] = 
   [
    ['1', ],
    ['2', ],
    ['3', ],
    ['4', ],
    ['5', ],
    ['6', ],
    ['7', ],
  ];
  weekday: any[] = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  dateNow: Date = new Date;
  n = this.dateNow.getDay();
  infoUpdate1: any[] = [
    ['1', ],
    ['2', ],
    ['3', ],
    ['4', ],
    ['5', ],
    ['6', ],
    ['7', ],
  ];
  @Input() changeCalendar : number;
  @Input() infoUpdate:any[];

  dateArray : any[] = [1,2,3,4,5,6,7];

  @Input() shiftOffer : ShiftOfferListDto[] = [];

  shiftList : ShiftOfferListDto[] = [];

  
  ngOnInit(): void {
    
    for (let i = 0; i < this.infoUpdate1.length; i++) {

      if (this.dateNow.getDay() == 0) {
        this.n = 7;
      } else {
        this.n = this.dateNow.getDay();
      }
      this.dateNow.setDate(this.dateNow.getDate() - this.n + i + 1);
      this.infoUpdate1[i][0] = this.weekday[this.dateNow.getDay()] + " " + this.dateNow.getDate();
      this.infoUpdate1[i][1] = this.dateNow;

    }
    if(this.infoUpdate == null){
      this.infoUpdate = this.infoUpdate1;
    }
  }

  getItemTable(day : Date) : ShiftOfferListDto[] {
      // for (let sf of Object.keys(this.shiftOffer)) {
      //   let s = this.shiftOffer[sf];
      //   if(s.date.format("DD MMM YYYY") === moment(day).format("DD MMM YYYY")){
      //     this.shiftList.push(s);
      //   }
      // }
      for(let shift of this.shiftOffer){
        if(shift.date.format("DD MMM YYYY") === moment(day).format("DD MMM YYYY")){
          this.shiftList.push(shift);
          
        }
       
      }
      
    
      return this.shiftList;
  }

  


 
}

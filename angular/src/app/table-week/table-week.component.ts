import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-week',
  templateUrl: './table-week.component.html',
  styleUrls: ['./table-week.component.css']
})
export class TableWeekComponent {

  constructor() { }

  days: any[] = [1, 2, 3, 4, 5, 6, 7];
  weekday: any[] = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  dateNow: Date = new Date;
  n = this.dateNow.getDay();
  infoUpdate1: any[] = [1, 2, 3, 4, 5, 6, 7]
  @Input() changeCalendar : number;
  @Input() infoUpdate:any[];
  
  ngOnInit(): void {
    
    for (let i = 0; i < this.infoUpdate1.length; i++) {

      if (this.dateNow.getDay() == 0) {
        this.n = 7;
      } else {
        this.n = this.dateNow.getDay();
      }
      this.dateNow.setDate(this.dateNow.getDate() - this.n + i + 1);
      this.infoUpdate1[i] = this.weekday[this.dateNow.getDay()] + " " + this.dateNow.getDate();
    }
    if(this.infoUpdate == null){
      this.infoUpdate = this.infoUpdate1;
    }
  }


 
}

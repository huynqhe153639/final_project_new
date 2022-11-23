import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button-week',
  templateUrl: './button-week.component.html',
  styleUrls: ['./button-week.component.css']
})
export class ButtonWeekComponent implements OnInit {

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

  ngOnInit(): void {
    this.checkTableWeek = 0;
    for (let i = 0; i < this.days.length; i++) {

      if (this.dateNow.getDay() == 0) {
        this.n = 7;
      } else {
        this.n = this.dateNow.getDay();
      }
      this.dateNow.setDate(this.dateNow.getDate() - this.n + i + 1);
      this.days[i][1] = this.dateNow;
      console.log(this.days[i][1]);
      if (i == 0) {
        this.dateStart = this.dateNow.getDate() + "/" + (this.dateNow.getMonth()+1) + "/" + this.dateNow.getFullYear();
      }
      if (i == 6) {
        this.dateEnd = this.dateNow.getDate() + "/" + (this.dateNow.getMonth()+1) + "/" + this.dateNow.getFullYear();
      }
      this.days[i][0] = this.weekday[this.dateNow.getDay()] + " " + this.dateNow.getDate();

    }
  }

  
  
  dateR: Date = new Date();
  dateExtra = new Date()
  public rowData: any[] = [];

  dateNow: Date = new Date;
  dateEnd = "";
  dateStart = "";
  n = this.dateNow.getDay();
  checkWeek = 0;
  status = "This Week";
  checkTableWeek = 0;
  @Output() truyenchobo = new EventEmitter();
  
  LeftRightButton(n: number) {
    if (n == 1) {
      this.dateNow.setDate(this.dateNow.getDate() + 7);
      this.checkTableWeek = 1;
      this.checkWeek++;
    }
    if (n == -1) {
      this.dateNow.setDate(this.dateNow.getDate() - 7);
      this.checkTableWeek = -1;
      this.checkWeek--;
    }
    this.ngOnInit();
    if (this.checkWeek == 1) this.status = "Next Week";
    else if (this.checkWeek == 0) this.status = "This Week";
    else if (this.checkWeek > 1 || this.checkWeek < -1) this.status = this.dateStart + " - " + this.dateEnd;
    else if (this.checkWeek == -1) this.status = "Last Week";
    this.truyenchobo.emit(this.days);
  }



}

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-preferred-day',
  templateUrl: './preferred-day.component.html',
  styleUrls: ['./preferred-day.component.css']
})
export class PreferredDayComponent implements OnInit {

  constructor() { }

  @Input() isAddShift:boolean;
  ngOnInit(): void {
  }
  addShift() {
    this.isAddShift = !this.isAddShift
  }

  days = [
    ['Sun', false],
    ['Mon', false],
    ['Tue', false],
    ['Wed', false],
    ['Thu', false],
    ['Fri', false],
    ['Sat', false],
  ]
  activeAll = false;
  isAllActive() {
    this.activeAll = !this.activeAll
    for (let i = 0; i < this.days.length; i++) {
      if (this.days[i][1] != this.activeAll) this.days[i][1] = !this.days[i][1]
    }
  }
  isActive(day: any) {


    for (let i = 0; i < this.days.length; i++) {
      if (this.days[i] === day) {
        this.days[i][1] = !this.days[i][1];
      }
    };
    for (let i = 0; i < this.days.length; i++) {
      if (!this.days[i][1]) this.activeAll = false;
    };

  }
}

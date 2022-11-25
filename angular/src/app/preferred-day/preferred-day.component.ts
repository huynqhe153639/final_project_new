import { Component, Input, OnInit } from '@angular/core';
import { UserDto } from '@shared/service-proxies/service-proxies';

@Component({
  selector: 'app-preferred-day',
  templateUrl: './preferred-day.component.html',
  styleUrls: ['./preferred-day.component.css']
})
export class PreferredDayComponent implements OnInit {

  constructor() { }

  @Input() isAddShift:boolean;

  @Input() user : UserDto = new UserDto();
  ngOnInit(): void {
   for(let day of this.user.prefferDays){
    if(day === 'All days'){
      this.isAllActive();
    }
    for(let i = 0;i< this.days.length;i++){
      if(this.days[i][0] === day){
        this.days[i][1] = true;
      }
    }
   }
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
    this.activeAll = !this.activeAll;
    if(this.activeAll == true){
      this.user.prefferDays.splice(0, this.user.prefferDays.length);
      this.user.prefferDays.push('All days');
    }else if(this.activeAll == false){
      this.user.prefferDays.splice(this.user.prefferDays.indexOf('All days'),1)
    }
    
    for (let i = 0; i < this.days.length; i++) {
      if (this.days[i][1] != this.activeAll){
        this.days[i][1] = !this.days[i][1];
      } 
    }
  }
  isActive(day: any) {
    this.user.prefferDays.splice(0, this.user.prefferDays.length);
    for (let i = 0; i < this.days.length; i++) {
      if (this.days[i] === day) {
        this.days[i][1] = !this.days[i][1];
      }
      if (!this.days[i][1] && this.activeAll == true){
        this.activeAll = false;
      }

      if(this.days[i][1] == true){
        this.user.prefferDays.push(this.days[i][0].toString());
      }
      
    };

  }
}

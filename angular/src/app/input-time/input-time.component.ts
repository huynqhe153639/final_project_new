import { Component, Input, OnInit } from '@angular/core';
import { toInteger } from 'lodash-es';
import * as moment from 'moment';
import { Moment } from 'moment';

@Component({
  selector: 'app-input-time',
  templateUrl: './input-time.component.html',
  styleUrls: ['./input-time.component.css']
})
export class InputTimeComponent implements OnInit {

  @Input() content;
  @Input() title;
  time : string;

  constructor() { }

  ngOnInit(): void {
    this.time = this.content.format("HH:mm").toLocaleString();

  }

  getHour(){
    return toInteger(this.time.split(":")[0]);
  }

  getMinute(){
    return toInteger(this.time.split(":")[1]);
  }

}

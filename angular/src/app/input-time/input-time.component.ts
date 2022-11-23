import { Component, Input, OnInit } from '@angular/core';
import { Moment } from 'moment';

@Component({
  selector: 'app-input-time',
  templateUrl: './input-time.component.html',
  styleUrls: ['./input-time.component.css']
})
export class InputTimeComponent implements OnInit {

  @Input() content;
  @Input() title;
  time : Moment;
  
  constructor() { }

  ngOnInit(): void {
    this.time = this.content.format("HH:mm A");
  }
  
}

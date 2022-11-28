import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { toInteger } from 'lodash-es';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  @Input() content;
  @Input() title;
  @Input() typeInput;
  constructor() { }
  getHour(){
    return toInteger(this.content.split(":")[0]);
  }
  getMinute(){
    return toInteger(this.content.split(":")[1]);
  }
  ngOnInit(): void {
  }
}

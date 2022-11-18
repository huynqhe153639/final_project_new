import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-time',
  templateUrl: './input-time.component.html',
  styleUrls: ['./input-time.component.css']
})
export class InputTimeComponent implements OnInit {

  @Input() content;
  @Input() title;
  constructor() { }

  ngOnInit(): void {
  }

}

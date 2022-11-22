import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

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

  ngOnInit(): void {
  }
}

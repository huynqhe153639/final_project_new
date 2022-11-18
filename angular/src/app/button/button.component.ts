import { Component, Input, OnInit, Output,EventEmitter } from "@angular/core";

@Component({
  selector: "app-button",
  templateUrl: "./button.component.html",
  styleUrls: ["./button.component.css"],
})
export class ButtonComponent implements OnInit {
  constructor() {}
  @Input() content: string;
  @Input() isActive: boolean =false;
  @Output() isAllEvent = new EventEmitter<any>();

  ngOnInit(): void {}
  active() {
    this.isActive = !this.isActive;
    if(this.isActive === false)
    {
      this.isAllEvent.emit(this.isActive);
    }
  }

}

import { Component, Input, OnInit, Output,EventEmitter } from "@angular/core";

@Component({
  selector: "app-notification",
  templateUrl: "./notification.component.html",
  styleUrls: ["./notification.component.css"],
})
export class NotificationComponent implements OnInit {
  constructor() {
  }
  @Input() isOpenBell: any = null;
  @Input() isClick: number;
  @Output() isCloseBellEvent = new EventEmitter<any>();
  CloseNotification() {
    this.isOpenBell = false;
    this.isCloseBellEvent.emit(this.isOpenBell);
  }

  onClickOutsideBell(e: any) {
    console.log(this.isClick);
    if (this.isClick > 0) {
      if (this.isClick % 2 == 1) {
        this.isCloseBellEvent.emit(false);
      }
      this.isClick = this.isClick + 1;
    }
    if (this.isClick === 0) {
      this.isClick = this.isClick + 1;
    }
  }
  ngOnInit(): void {

  }
}

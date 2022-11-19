import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  title = "final";
  isOpenBell: any = null;
  isOpenLogout:boolean = false;
  isClick = -2;

  OpenNotification() {

    this.isClick = this.isClick + 2;
    this.isOpenBell = !this.isOpenBell;
  }
  CloseBell(close:boolean)
  {
    this.isOpenBell=close;
  }
  onClickedOutside(e: Event) {
    if (this.isOpenLogout) {
      this.isOpenLogout = false;
    }
  }
  onLogout() {
    this.isOpenLogout = !this.isOpenLogout;
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { UserDto } from '@shared/service-proxies/service-proxies';

@Component({
  selector: 'app-header-custom',
  templateUrl: './header-custom.component.html',
  styleUrls: ['./header-custom.component.css']
})
export class HeaderCustomComponent implements OnInit {

  @Input() user : UserDto = new UserDto();
  
  constructor() { }

  ngOnInit(): void {
  }
  title = "final";
  isOpenPopup: any = null;
  isOpenLogout:boolean = false;
  isClick = -2;

  OpenNotification() {

    this.isClick = this.isClick + 2;
    this.isOpenPopup = !this.isOpenPopup;
  }
  ClosePopup(close:boolean)
  {
    this.isOpenPopup=close;
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

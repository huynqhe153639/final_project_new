import { NotificationListDto } from './../../shared/service-proxies/service-proxies';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-popup-notification',
  templateUrl: './popup-notification.component.html',
  styleUrls: ['./popup-notification.component.css']
})
export class PopupNotificationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() isOpenPopup: any = null;
  @Input() isClick: number;
  @Input() notifications:NotificationListDto[];
  @Output() isClosePopupEvent = new EventEmitter<any>();
  ClosePopup() {
    this.isOpenPopup = false;
    this.isClosePopupEvent.emit(this.isOpenPopup);
  }

  onClickOutsidePopup(e: any) {
    if (this.isClick > 0) {
      if (this.isClick % 2 == 1) {
        this.isClosePopupEvent.emit(false);
      }
      this.isClick = this.isClick + 1;
    }
    if (this.isClick === 0) {
      this.isClick = this.isClick + 1;
    }
  }

}

import { NgForm } from '@angular/forms';
import { InputTimeComponent } from './../input-time/input-time.component';
import { InputComponent } from './../input/input.component';
import { AppComponentBase } from "@shared/app-component-base";
import {
  LeaveServiceProxy,
  LeaveListDto,
  NotificationServiceProxy,
  NotificationListDto,
} from "./../../shared/service-proxies/service-proxies";
import { extend, result } from "lodash-es";
import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  Input,
  Injector,
  ViewChild,
} from "@angular/core";
import * as moment from "moment";

@Component({
  selector: "app-popup-form",
  templateUrl: "./popup-form.component.html",
  styleUrls: ["./popup-form.component.css"],
})
export class PopupFormComponent extends AppComponentBase implements OnInit {
  constructor(injector: Injector, private leaveService: LeaveServiceProxy,private notificationService:NotificationServiceProxy) {
    super(injector);
  }
  @ViewChild('fromDate') fromDate :InputComponent;
  @ViewChild('toDate') toDate :InputComponent;
  @ViewChild('startTime') startTime :InputComponent;
  @ViewChild('endTime') endTime :InputComponent;

  ngOnInit(): void {}
  leave: LeaveListDto = new LeaveListDto();
  notification: NotificationListDto = new NotificationListDto();
  btnActive = 1;
  isActive(number: any) {
    this.btnActive = number;
  }
  types = [
    { id: 1, name: "Annual Leave" },
    { id: 2, name: "Sick Leave" },
    { id: 3, name: "Parental Leave" },
  ];
  isAll = true;
  addAll() {
    this.isAll = !this.isAll;
  }
  @Input() isOpenPopup: any = null;
  @Input() isClick: number;
  @Output() isClosePopupEvent = new EventEmitter<any>();
  @Output() createNewLeaveEvent = new EventEmitter<any>();
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

  submit(f : NgForm) {
    this.leave.fromDate = moment(this.fromDate.content);
    this.leave.toDate = moment(this.toDate.content);



    console.log( this.leave.fromDate)
    // this.leave.startTime = moment(this.startTime.content);
    // this.leave.endTime = moment(this.endTime.content);
    this.leaveService.create(this.leave).subscribe((result) => {
      this.createNewLeaveEvent.emit(result);
    });
    this.notificationService.create(this.notification).subscribe((result) => {
      // this.createNewLeaveEvent.emit(result);
    });

    this.notify.success(this.l("Save Successfully"))
    this.ClosePopup();

  }
}

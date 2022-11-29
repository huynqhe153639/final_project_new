import { NgForm } from "@angular/forms";
import { InputTimeComponent } from "./../input-time/input-time.component";
import { InputComponent } from "./../input/input.component";
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
  constructor(
    injector: Injector,
    private leaveService: LeaveServiceProxy,
    private notificationService: NotificationServiceProxy
  ) {
    super(injector);
  }
  @ViewChild("fromDate") fromDate: InputComponent;
  @ViewChild("toDate") toDate: InputComponent;
  @ViewChild("startTime") startTime: InputComponent;
  @ViewChild("endTime") endTime: InputComponent;
  @ViewChild("timeStartExample") timeStartExample: InputComponent;
  @ViewChild("timeEndExample") timeEndExample: InputComponent;

  // timeExample: any;

  ngOnInit(): void {
    // this.getAllLeaves();
    // this.setRowData(this.leaves);
  }
  leave: LeaveListDto = new LeaveListDto();
  leaves: LeaveListDto[] = [];
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
  @Output() newLeavesEvent: EventEmitter<any> = new EventEmitter<any>();
  all: any;
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

  newStartDay: any;
  newEndDay: any;

  submit(f: NgForm) {
    console.log(this.all);

    this.leave.fromDate = moment.utc(this.fromDate.content).utcOffset(0);
    this.leave.toDate = moment.utc(this.toDate.content).utcOffset(0);

    if (this.all) {
      this.newStartDay = moment().utcOffset(0);
      this.newStartDay.set("hour", 0);
      this.newStartDay.set("minute", 0);
      this.leave.startTime = this.newStartDay;

      this.newEndDay = moment().utcOffset(0);
      this.newEndDay.set("hour", 23);
      this.newEndDay.set("minute", 59);
      this.leave.endTime = this.newEndDay;
    } else {
      this.newStartDay = moment().utcOffset(0);
      this.newStartDay.set("hour", this.timeStartExample.getHour());
      this.newStartDay.set("minute", this.timeStartExample.getMinute());
      this.leave.startTime = this.newStartDay;

      this.newEndDay = moment().utcOffset(0);
      this.newEndDay.set("hour", this.timeEndExample.getHour());
      this.newEndDay.set("minute", this.timeEndExample.getMinute());
      this.leave.endTime = this.newEndDay;
    }

    this.notification.fromDate = moment(this.fromDate.content);
    this.notification.toDate = moment(this.toDate.content);
    this.notification.startTime = this.leave.startTime;
    this.notification.endTime = this.leave.endTime;
    this.notification.timeResgister = moment();

    this.leaveService.create(this.leave).subscribe((result) => {
      this.newLeavesEvent.emit(result);
      console.log(result);
    });

    this.notificationService
      .create(this.notification)
      .subscribe((result) => {});

    this.notify.success(this.l("Save Successfully"));
    this.ClosePopup();
  }
}

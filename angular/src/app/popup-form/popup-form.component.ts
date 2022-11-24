import { AppComponentBase } from "@shared/app-component-base";
import {
  LeaveServiceProxy,
  LeaveListDto,
} from "./../../shared/service-proxies/service-proxies";
import { extend, result } from "lodash-es";
import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  Input,
  Injector,
} from "@angular/core";
import * as moment from "moment";

@Component({
  selector: "app-popup-form",
  templateUrl: "./popup-form.component.html",
  styleUrls: ["./popup-form.component.css"],
})
export class PopupFormComponent extends AppComponentBase implements OnInit {
  constructor(injector: Injector, private leaveService: LeaveServiceProxy) {
    super(injector);
  }

  ngOnInit(): void {}
  leave: LeaveListDto = new LeaveListDto();
  btnActive = 1;
  isActive(number: any) {
    this.btnActive = number;
  }
  types = [
    { id: 1, name: "Annual Leave" },
    { id: 2, name: "Sick Leave" },
    { id: 3, name: "Parental Leave" },
  ];
  isAll = false;
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
    console.log(this.isClick);
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
  save() {
    this.leave.fromDate = moment(this.leave.fromDate);
    this.leave.startTime = moment(this.leave.startTime);

    this.leaveService.create(this.leave).subscribe((result) => {
      this.createNewLeaveEvent.emit(result);
      console.log(result)
    });
  }
}

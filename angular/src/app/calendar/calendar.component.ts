import {
  RosterAndAvaiServiceProxy,
  RosterAndAvaiListDtos,
  LeaveServiceProxy,
  LeaveListDto,
} from "./../../shared/service-proxies/service-proxies";
import { AppComponentBase } from "@shared/app-component-base";
import {
  AfterViewInit,
  Component,
  OnInit,
  ViewChild,
  Injector,
} from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { AgGridAngular } from "ag-grid-angular";
import { CellClickedEvent, ColDef, GridReadyEvent } from "ag-grid-community";
import { Observable } from "rxjs";
import { ButtonWeekComponent } from "../button-week/button-week.component";
import { result } from "lodash-es";

@Component({
  selector: "app-calendar",
  templateUrl: "./calendar.component.html",
  styleUrls: ["./calendar.component.css"],
})
export class CalendarComponent extends AppComponentBase implements OnInit {
  constructor(
    private http: HttpClient,
    injector: Injector,
    private rosterService: RosterAndAvaiServiceProxy,
    private leaveService: LeaveServiceProxy
  ) {
    super(injector);
  }
  rosters: RosterAndAvaiListDtos[] = [];
  leaves: LeaveListDto[] = [];
  leaveCreated: LeaveListDto= new LeaveListDto();
  rowData: any[] = [];

  getAllLeaves() {
    this.leaveService.getAllCustom().subscribe((result) => {
      this.leaves = result.items;
      console.log("conmeno " + this.leaves.length)
    });
  }
  getAllRosters() {
    this.rosterService.getAllCustom().subscribe((result) => {
      this.rosters = result.items;
    });
  }
  setRowData(){
    for (var i = 0; i < this.leaves.length; i++){
      this.rowData[i]={ 'Leave Type' : this.leaves[i].type, 'From Date':this.leaves[i].fromDate.format("DD/MM/YYYY hh:mm"),  'To Date' :this.leaves[i].toDate.format("DD/MM/YYYY hh:mm"),'Status':this.leaves[i].status?"Approved":"UnApproved" };

    }
  }

  newLeavesEvent(newLeave:LeaveListDto) {
    this.getAllLeaves();
    this.leaveCreated=newLeave;
    this.leaves.push(newLeave);
    this.rowData=[];
    for (var i = 0; i < this.leaves.length; i++){
      this.rowData[i]={ 'Leave Type' : this.leaves[i].type, 'From Date':this.leaves[i].fromDate.format("DD/MM/YYYY ")+this.leaves[i].startTime.format("hh:mm"),  'To Date' :this.leaves[i].toDate.format("DD/MM/YYYY ")+this.leaves[i].endTime.format("hh:mm"),'Status':this.leaves[i].status?"Approved":"UnApproved" };
    }
  }

  days: any[] = [1, 2, 3, 4, 5, 6, 7];
  weekday: any[] = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  types: any[] = ["Annual Leave", "Sick Leave", "Parental Leave"];

  checkRoster = true;
  checkAvai = false;
  checkLeave = false;
  changeCalendar = 1;
  isPopup = false;
  isAll = false;
  isBill = false;

  dateNow: Date = new Date();
  dateEnd = "";
  dateStart = "";
  n = this.dateNow.getDay();
  checkWeek = 0;
  status = "This Week";

  messager: any[];
  buttonWeek(days: any[]) {
    this.messager = days;
  }

  ngOnInit(): void {
    this.getAllRosters();
    this.getAllLeaves();
    // this.setRowData();

    for (let i = 0; i < this.days.length; i++) {
      if (this.dateNow.getDay() == 0) {
        this.n = 7;
      } else {
        this.n = this.dateNow.getDay();
      }
      this.dateNow.setDate(this.dateNow.getDate() - this.n + i + 1);
      if (i == 0) {
        this.dateStart =
          this.dateNow.getDate() +
          "/" +
          (this.dateNow.getMonth() + 1) +
          "/" +
          this.dateNow.getFullYear();
      }
      if (i == 6) {
        this.dateEnd =
          this.dateNow.getDate() +
          "/" +
          (this.dateNow.getMonth() + 1) +
          "/" +
          this.dateNow.getFullYear();
      }

      this.days[i] =
        this.weekday[this.dateNow.getDay()] + " " + this.dateNow.getDate();
    }
  }

  RosterButton() {
    this.changeCalendar = 1;
    this.checkRoster = true;
    this.checkAvai = false;
    this.checkLeave = false;
  }

  AvaiButton() {
    this.changeCalendar = 2;
    this.checkAvai = true;
    this.checkRoster = false;
    this.checkLeave = false;
  }

  LeaveButton() {
    this.changeCalendar = 3;
    this.checkLeave = true;
    this.checkRoster = false;
    this.checkAvai = false;
  }

  RequestLeaveButton() {}

  LeftRightButton(n: number) {
    if (n == 1) {
      this.dateNow.setDate(this.dateNow.getDate() + 7);
      this.checkWeek++;
    }
    if (n == -1) {
      this.dateNow.setDate(this.dateNow.getDate() - 7);
      this.checkWeek--;
    }
    this.ngOnInit();
    if (this.checkWeek == 1) this.status = "Next Week";
    else if (this.checkWeek == 0) this.status = "This Week";
    else if (this.checkWeek > 1 || this.checkWeek < -1)
      this.status = this.dateStart + " - " + this.dateEnd;
    else if (this.checkWeek == -1) this.status = "Last Week";
  }
  isClick = -2;
  Popup() {
    this.isPopup = !this.isPopup;
    this.isClick = this.isClick + 2;
  }

  addAll() {
    this.isAll = !this.isAll;
  }

  // Each Column Definition results in one Column.


  // DefaultColDef sets props common to all Columns

  dateR: Date = new Date();
  dateExtra = new Date();
  public defaultColDef: ColDef = {
    flex: 1,
    minWidth: 100,
    sortable: true,
    filter: true,
  };
  public rowSelection: 'single' | 'multiple' = 'multiple';
  public style: any = {
    width: '100%',
    height: '100%',
    flex: '1 1 auto',
  };
  colDefs: ColDef[] = [


    { field: 'Leave Type',sortable: true,filter: true,headerCheckboxSelection : true,checkboxSelection:true},
    { field: 'From Date',filter: true ,comparator: dateComparator },
    { field: 'To Date',filter: true,comparator: dateComparator  },
    { field: 'Status',sortable: true,filter: true },
  ]
  // Data that gets displayed in the grid

  // For accessing the Grid's API
  // @ViewChild(AgGridAngular) agGrid!: AgGridAngular;

  // Example of consuming Grid Event
  onCellClicked(e: CellClickedEvent): void {
    console.log("cellClicked", e);
  }

  // Example using Grid's API
  // clearSelection(): void {
  //   this.agGrid.api.deselectAll();
  // }

  checkBill = 1;
  OnBill() {
    this.checkBill = 1;
    this.isBill = !this.isBill;
  }
  OffBill() {
    if (this.checkBill % 2 == 1) {
      this.checkBill = 2;
    } else {
      this.isBill = false;
    }
  }
  isLogout = false;
  checkLogout = 1;
  IsLogout() {
    this.checkLogout = 1;
    this.isLogout = !this.isLogout;
  }

  OffLogout() {
    if (this.checkLogout % 2 == 1) {
      this.checkLogout = 2;
    } else {
      this.isLogout = false;
    }
  }

  changeColorLogout = true;
  ChangeColorLogout() {
    this.changeColorLogout = !this.changeColorLogout;
  }
  title = "final";
  isOpenPopup: any = null;
  isOpenLogout: boolean = false;

  OpenNotification() {
    this.isClick = this.isClick + 2;
    this.isOpenPopup = !this.isOpenPopup;
  }
  ClosePopup(close: boolean) {
    this.isOpenPopup = close;
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
function dateComparator(date1: string, date2: string) {
  const date1Number = monthToComparableNumber(date1);
  const date2Number = monthToComparableNumber(date2);
  if (date1Number === null && date2Number === null) {
    return 0;
  }
  if (date1Number === null) {
    return -1;
  }
  if (date2Number === null) {
    return 1;
  }
  return date1Number - date2Number;
}

function monthToComparableNumber(date: string) {
  if (date === undefined || date === null) {
    return null;
  }
  const yearNumber = Number.parseInt(date.substring(6, 10));
  const monthNumber = Number.parseInt(date.substring(3, 5));
  const dayNumber = Number.parseInt(date.substring(0, 2));
  return yearNumber * 10000 + monthNumber * 100 + dayNumber;
}

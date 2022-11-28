import { LeaveListDto } from './../../shared/service-proxies/service-proxies';
import { Component, Input, OnInit } from '@angular/core';
import { ColDef } from 'ag-grid-community';
@Component({
  selector: 'app-table-leave',
  templateUrl: './table-leave.component.html',
  styleUrls: ['./table-leave.component.css']
})
export class TableLeaveComponent implements OnInit {
  constructor() {}

  @Input() leaves: LeaveListDto[]=[];
  colDefs: ColDef[] = [


    { field: 'Leave Type',sortable: true,filter: true,headerCheckboxSelection : true,checkboxSelection:true},
    { field: 'From Date',filter: true ,comparator: dateComparator },
    { field: 'To Date',filter: true,comparator: dateComparator  },
    { field: 'Status',sortable: true,filter: true },
  ]

  @Input() rowData:any[] = []
  dateNow2 = new Date()
  dateExtra = new Date()
  setRowData(){
    for (var i = 0; i < this.leaves.length; i++){
      this.rowData[i]={ 'Leave Type' : this.leaves[i].type, 'From Date':this.leaves[i].fromDate.format("DD/MM/YYYY ")+this.leaves[i].startTime.format("hh:mm"),  'To Date' :this.leaves[i].toDate.format("DD/MM/YYYY ")+this.leaves[i].endTime.format("hh:mm"),'Status':this.leaves[i].status?"Approved":"UnApproved" };

    }
  }
  ngOnInit(): void {

    this.setRowData()


  }

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
// eg 29/08/2004 gets converted to 20040829
function monthToComparableNumber(date: string) {
  if (date === undefined || date === null ) {
    return null;
  }
  const yearNumber = Number.parseInt(date.substring(6, 10));
  const monthNumber = Number.parseInt(date.substring(3, 5));
  const dayNumber = Number.parseInt(date.substring(0, 2));
  return yearNumber * 10000 + monthNumber * 100 + dayNumber;
}

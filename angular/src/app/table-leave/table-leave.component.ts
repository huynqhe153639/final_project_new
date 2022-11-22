import { Component, OnInit } from '@angular/core';
import { ColDef } from 'ag-grid-community';
@Component({
  selector: 'app-table-leave',
  templateUrl: './table-leave.component.html',
  styleUrls: ['./table-leave.component.css']
})
export class TableLeaveComponent implements OnInit {
  constructor() {}






  ngOnInit(): void {

    this.setRowData()

  }
  colDefs: ColDef[] = [


    { field: 'Leave Type',sortable: true,filter: true,headerCheckboxSelection : true,checkboxSelection:true},
    { field: 'From Date',filter: true ,comparator: dateComparator },
    { field: 'To Date',filter: true,comparator: dateComparator  },
    { field: 'Status',sortable: true,filter: true },
  ]

  rowData:any = [

    // { 'Leave Type' : 'Annual Leave', 'From Date':,  'To Date' : ,'Status':'Approved' },

  ]
  dateNow2 = new Date()
  dateExtra = new Date()
  setRowData(){
    for (var i = 0; i < 500; i++){
      this.dateExtra.setDate(this.dateNow2.getDate()+1);
        this.rowData[i]={ 'Leave Type' : 'Annual Leave', 'From Date':this.dateNow2.toLocaleString('en-GB', {
          day: 'numeric', month: 'numeric', year: 'numeric'
        })+" "+this.dateExtra.getHours()+":"+this.dateExtra.getMinutes(),  'To Date' : this.dateExtra.toLocaleString('en-GB', {
          day: 'numeric', month: 'numeric', year: 'numeric'
        })+" "+this.dateExtra.getHours()+":"+this.dateExtra.getMinutes(),'Status':'Approved' };
        this.dateNow2.setDate(this.dateNow2.getDate()+1);
    }
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

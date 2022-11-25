import { RosterAndAvaiListDtos } from './../../shared/service-proxies/service-proxies';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-item-availability',
  templateUrl: './table-item-availability.component.html',
  styleUrls: ['./table-item-availability.component.css']
})
export class TableItemAvailabilityComponent implements OnInit {

  constructor() { }
  @Input() leaves: RosterAndAvaiListDtos[]=[];

  ngOnInit(): void {
  }

}

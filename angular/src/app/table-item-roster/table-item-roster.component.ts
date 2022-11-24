import { AppComponentBase } from "@shared/app-component-base";
import {
  RosterAndAvaiListDtos,
  RosterAndAvaiServiceProxy,
} from "./../../shared/service-proxies/service-proxies";
import { Component, Input, OnInit, Injector } from "@angular/core";
import { extend, result } from "lodash-es";

@Component({
  selector: "app-table-item-roster",
  templateUrl: "./table-item-roster.component.html",
  styleUrls: ["./table-item-roster.component.css"],
})
export class TableItemRosterComponent
  extends AppComponentBase
  implements OnInit
{
  constructor(
    injector: Injector,
    private rosterService: RosterAndAvaiServiceProxy
  ) {
    super(injector);
  }

  @Input() rosters: RosterAndAvaiListDtos[]=[];
  ngOnInit(): void {
    for(let i =0;i<this.rosters.length;i++){
        this.rosters[i].fromTime.format("hh:mm");
    }
  }
}

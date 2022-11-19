import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-preferred-day",
  templateUrl: "./preferred-day.component.html",
  styleUrls: ["./preferred-day.component.css"],
})
export class PreferredDayComponent implements OnInit {
  constructor() {}
  AllDay: string = "All day";
  days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  activeAll = false;
  isChildActive: boolean = false;
  isAllActive() {
    this.activeAll = !this.activeAll;

    if (this.activeAll) {
      this.isChildActive = true;
    }
    if(!this.activeAll){
      this.isChildActive = false;
    }
  }
  isBtnAllActive(value: any) {
    this.activeAll = value;
    console.log(this.activeAll);
  }
  ngOnInit(): void {}
}

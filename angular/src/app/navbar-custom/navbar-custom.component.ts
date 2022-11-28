import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-custom',
  templateUrl: './navbar-custom.component.html',
  styleUrls: ['./navbar-custom.component.css']
})
export class NavbarCustomComponent implements OnInit {

  constructor() { }
  @Input() isOpenNav:boolean;
  ngOnInit(): void {
  }

}

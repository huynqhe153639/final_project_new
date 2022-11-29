import { AppAuthService } from './../../shared/auth/app-auth.service';
import { DataService } from './../data.service';
import { NotificationServiceProxy, UserServiceProxy } from './../../shared/service-proxies/service-proxies';
import { AppComponentBase } from 'shared/app-component-base';
import { Component, Input, OnInit, Output, EventEmitter, Injector } from '@angular/core';

@Component({
  selector: 'app-navbar-custom',
  templateUrl: './navbar-custom.component.html',
  styleUrls: ['./navbar-custom.component.css']
})
export class NavbarCustomComponent extends AppComponentBase implements OnInit {

  constructor(Injector:Injector,private _authService : AppAuthService) {
    super(Injector);
   }
  @Input() isOpenNav:boolean;
  @Output() CloseNavEvent: EventEmitter<any> = new EventEmitter<any>();
  CloseNav(){
    this.isOpenNav=null;
    this.CloseNavEvent.emit(this.isOpenNav);
  }
  logout(){
    this._authService.logout();
    this.isOpenNav=null;
    this.CloseNavEvent.emit(this.isOpenNav);
  }
  ngOnInit(): void {
  }

}

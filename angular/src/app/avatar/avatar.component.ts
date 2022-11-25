import { Component, Injector, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { AppComponentBase } from '@shared/app-component-base';
import { UserDto, UserServiceProxy } from '@shared/service-proxies/service-proxies';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.css']
})
export class AvatarComponent implements OnInit {

  @Input() isNavbar : boolean = false;
  @Input() user : UserDto = new UserDto();
  @Output() OpenLogoutEvent= new EventEmitter();
  isOpenLogout:boolean=false;



  firstname : string;
  lastname : string;


  constructor() {
  }

  ngOnInit(): void {

  }
  OpenLogout(){
    this.isOpenLogout=!this.isOpenLogout;
    this.OpenLogoutEvent.emit(this.isOpenLogout);
 }
  getFirstLastNameLetter(user : UserDto) : string{
    this.firstname = user?.name?.charAt(0).toUpperCase();
    this.lastname = user?.surname?.charAt(0).toUpperCase();
    return this.firstname + this.lastname;
  }

}

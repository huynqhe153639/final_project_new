import { NotificationServiceProxy, NotificationListDto, UserServiceProxy } from './../../shared/service-proxies/service-proxies';
import { AppComponentBase } from '@shared/app-component-base';
import { extend, result } from 'lodash-es';
import { Component, Input, OnInit, Inject, Injector } from '@angular/core';
import { UserDto } from '@shared/service-proxies/service-proxies';
import { DataService } from '@app/data.service';
import { AppAuthService } from '@shared/auth/app-auth.service';

@Component({
  selector: 'app-header-custom',
  templateUrl: './header-custom.component.html',
  styleUrls: ['./header-custom.component.css']
})
export class HeaderCustomComponent extends AppComponentBase implements OnInit {

  @Input() user : UserDto = new UserDto();

  constructor(Injector:Injector,private notificationService:NotificationServiceProxy, private userService : UserServiceProxy, private dataService : DataService,private _authService : AppAuthService) {
    super(Injector);
   }

   notifications: NotificationListDto[]=[];
   noticationString: NotificationListDto[]=[];
   getAllNotification(){
    this.notificationService.getAllCustom().subscribe(result =>{
      this.notifications= result.items;
    })
   }

   getCurrentUser(){
    this.userService.getCurrentUser().subscribe(result => {
      this.user = result;
    });
  }

  ngOnInit(): void {
    this.getAllNotification();
    this.getCurrentUser();
    this.dataService.user.subscribe((user : UserDto) => {
      this.user = user;
    });
  }
  title = "final";
  isOpenPopup: any = null;
  isOpenLogout:boolean = false;
  isClick = -2;
  isOpenNav:boolean = null;
  OpenNavbar(){
    if(this.isOpenNav=== null){
      this.isOpenNav =false;
      this.isOpenNav=!this.isOpenNav
    }
    else{
      this.isOpenNav=null

    }
  }
  CloseNavEvent(event:any){
    this.isOpenNav= event;

  }
  OpenNotification() {

    this.isClick = this.isClick + 2;
    this.isOpenPopup = !this.isOpenPopup;
    this.getAllNotification();
    // for(let i = 0; i < this.notifications.length; i++){
    //   do{
    //     this.notifications[i].fromDate.add(1, 'days').calendar();
    //      this.noticationString.push(this.notifications[i]);
    //   }
    //   while(this.notifications[i].fromDate != this.notifications[i].toDate)
    // }
    // console.log(this.noticationString);
  }
  ClosePopup(close:boolean)
  {
    this.isOpenPopup=close;
  }
  onClickedOutside(e: Event) {
    if (this.isOpenLogout) {
      this.isOpenLogout = false;
    }
  }
  onLogout(isOpen:boolean) {
    this.isOpenLogout = isOpen;
  }

  logout(){
    this._authService.logout();
  }
}

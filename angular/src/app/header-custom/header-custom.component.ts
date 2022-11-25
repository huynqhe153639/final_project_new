import { NotificationServiceProxy, NotificationListDto } from './../../shared/service-proxies/service-proxies';
import { AppComponentBase } from '@shared/app-component-base';
import { extend, result } from 'lodash-es';
import { Component, Input, OnInit, Inject, Injector } from '@angular/core';
import { UserDto } from '@shared/service-proxies/service-proxies';

@Component({
  selector: 'app-header-custom',
  templateUrl: './header-custom.component.html',
  styleUrls: ['./header-custom.component.css']
})
export class HeaderCustomComponent extends AppComponentBase implements OnInit {

  @Input() user : UserDto = new UserDto();

  constructor(Injector:Injector,private notificationService:NotificationServiceProxy) {
    super(Injector);
   }
   notifications: NotificationListDto[]=[];
   getAllNotification(){
    this.notificationService.getAll("",0,100).subscribe(result =>{
      this.notifications= result.items;
    })
   }

  ngOnInit(): void {
    this.getAllNotification();
  }
  title = "final";
  isOpenPopup: any = null;
  isOpenLogout:boolean = false;
  isClick = -2;

  OpenNotification() {

    this.isClick = this.isClick + 2;
    this.isOpenPopup = !this.isOpenPopup;
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
}

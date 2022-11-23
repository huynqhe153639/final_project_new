import { Component, Injector, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { InputTimeComponent } from '@app/input-time/input-time.component';
import { InputComponent } from '@app/input/input.component';
import { PreferredDayComponent } from '@app/preferred-day/preferred-day.component';
import { UpdateImageModalComponent } from '@app/update-image-modal/update-image-modal.component';
import { AppComponentBase } from '@shared/app-component-base';
import { UserDto, UserServiceProxy } from '@shared/service-proxies/service-proxies';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent extends AppComponentBase implements OnInit {

  enable : boolean = false;
  check : boolean = false;

  @ViewChild('updateImageModal') updateImageModalModal : UpdateImageModalComponent;

  user : UserDto = new UserDto();

  @ViewChild('firstname') firstname :InputComponent;
  @ViewChild('lastname') lastname :InputComponent;
  @ViewChild('id') id :InputComponent;
  @ViewChild('position') position :InputComponent;
  @ViewChild('email') email :InputComponent;
  @ViewChild('phone') phone :InputComponent;
  @ViewChild('prefer') prefer :PreferredDayComponent;
  @ViewChild('start') start :InputTimeComponent;
  @ViewChild('end') end :InputTimeComponent;

  day : any[] = [
    {id : "Sun", value : false},
    {id : "Mon", value : false},
    {id : "Tues", value : false},
    {id : "Wed", value : false},
    {id : "Thur", value : false},
    {id : "Fri", value : false},
    {id : "Sat", value : false},
  ]

  isEnable(){
    this.enable = !this.enable;
  }

  isCheckAllDay(){
    if(this.check == false)
    {
      for(let d of this.day){
        d.value = true;
      }
    }else{
      for(let d of this.day){
        d.value = false;
      }
    }

    this.check = !this.check;
  }

  isCheck(id : string){
    if(this.check == true){
      this.check = false;
      for(let d of this.day){
        if(d.id == id ){
          d.value = !d.value;
        }
      }
    }else{
      for(let d of this.day){
        if(d.id == id ){
          d.value = !d.value;
        }
    }
  }
}
  constructor(injector : Injector, private userService : UserServiceProxy) {
      super(injector);
  }

  ngOnInit(): void {
     this.getCurrentUser();
  }

  getCurrentUser(){
    this.userService.getCurrentUser().subscribe(result => {
      this.user = result;
      if(this.user.isAdditionalShift == true){
        this.enable = true;
      }
      
    });
    
  }

  submit(f : NgForm){
    this.user.name = this.firstname.content;
    this.user.surname = this.lastname.content;
    this.user.position = this.position.content;
    this.user.emailAddress = this.email.content;
    this.user.phone = this.phone.content;
    this.userService.update(this.user).subscribe(result => {
      this.getCurrentUser();
      this.notify.success(this.l('Saved Successfully'));
    })

  }

  updateImage(){
    this.updateImageModalModal.show(this.user);
  }

  onImageUpdated(user : UserDto){
    this.getCurrentUser();
    this.notify.success(this.l('Saved Successfully'));
  }

}

import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { InputComponent } from '@app/input/input.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  enable : boolean = false;
  check : boolean = false;

  firstname = '';
  lastname ='';

  @ViewChild('appinput1') appinput1 :InputComponent;
  @ViewChild('appinput2') appinput2 :InputComponent;

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
  constructor() { }

  ngOnInit(): void {
    
  }
  getData(data : string){
      this.firstname = data;
  }

  submit(f : NgForm){
    // if(f.valid){
    //   this.toastr.success('Save Successfully!', '',{
    //     timeOut :3000,
    //     positionClass: 'toast-bottom-right',
    //   });
    // }
    console.log(this.appinput1.content);
    console.log(this.appinput2.content);

  }

}

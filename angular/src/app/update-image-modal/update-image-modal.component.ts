import { Component, EventEmitter, Injector, OnInit, Output, ViewChild } from '@angular/core';
import { AppComponentBase } from '@shared/app-component-base';
import { UserDto, UserServiceProxy } from '@shared/service-proxies/service-proxies';
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-update-image-modal',
  templateUrl: './update-image-modal.component.html',
  styleUrls: ['./update-image-modal.component.css']
})
export class UpdateImageModalComponent extends AppComponentBase implements OnInit {

  @ViewChild('createOrEditModal') modal : ModalDirective;
  @Output() modalSave: EventEmitter<any> = new EventEmitter<any>();

    active = false;
    saving = false;
    user : UserDto = new UserDto();

    constructor(injector : Injector, private userService : UserServiceProxy){
        super(injector);
    }

    ngOnInit(): void {
      
    }

    show(user : UserDto) : void{ 
      this.user = user;
      this.active = true;
      this.modal.show();   
      
    }
       
    save() : void{   
      this.saving = true;
      if(this.user.image == ''){
        this.user.image = null;
      }
      this.userService.update(this.user)
        .subscribe(result => {
            this.modalSave.emit(result);
            this.close();
        });       
    }

    close(): void{
        this.active = false;
        this.modal.hide();
    }

    onFileSelected(event) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]);

      reader.onload = (event: any) => {
        this.user.image = event.target.result as string;
      };

      reader.onerror = (event: any) => {
        console.log("File could not be read: " + event.target.error.code);
      };    

  }

}

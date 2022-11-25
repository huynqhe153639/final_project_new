import { Component, EventEmitter, Injector, OnInit, Output, ViewChild } from '@angular/core';
import { AppComponentBase } from '@shared/app-component-base';
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-shift-offer-modal',
  templateUrl: './shift-offer-modal.component.html',
  styleUrls: ['./shift-offer-modal.component.css']
})
export class ShiftOfferModalComponent extends AppComponentBase implements OnInit {

  @ViewChild('shiftModal') modal : ModalDirective;
  @Output() modalSave: EventEmitter<any> = new EventEmitter<any>();
  constructor(injector : Injector) {
    super(injector);
   }
   type : string;

  ngOnInit(): void {
  }

show(type : string) : void{ 
  this.type = type;
  this.modal.show();                
}

save() : void{  
   this.close();
   this.notify.success("Saved Successfully!");
}

close(): void{
    this.modal.hide();
}

}

import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-confirm-email',
  templateUrl: './form-confirm-email.component.html',
  styleUrls: ['./form-confirm-email.component.css']
})
export class FormConfirmEmailComponent implements OnInit {
  @Output() truyenchobo = new EventEmitter();
  email : string = "";
  constructor() { }

  ngOnInit(): void {
    console.log(111);
  }
  
  checkEmailExist : boolean;
  submit(f : NgForm){
    this.truyenchobo.emit(this.email);
  }
}

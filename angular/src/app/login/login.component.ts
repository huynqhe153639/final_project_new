import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl('', Validators.required,),
    password: new FormControl('', Validators.required)
  });


  constructor() { }
link = '/login';
  onSubmit() {
    // Process checkout data here
    
    if(this.email?.value != '' && this.password?.value != ''){
      this.link = '';
    }
  }

  ngOnInit(): void {
    
  
  }
  
  get email() { return this.loginForm.get('email'); }
  
  get password() { return this.loginForm.get('password'); }
  checkClick = false;
  CheckClick(){
    this.checkClick = true;
  }
  checkClickOutside = false;
  CheckClickOutside(){
    if(this.checkClick == true){
      this.checkClickOutside = true;
    }
  }

  checkClick1 = false;
  CheckClick1(){
    this.checkClick1 = true;
  }
  checkClickOutside1 = false;
  CheckClickOutside1(){
    if(this.checkClick1 == true){
      this.checkClickOutside1 = true;
    }
  }
  checkClick2 = false;
  CheckClick2(){
    this.checkClick2 = true;
  }

}

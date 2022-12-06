import { Component, Injector, OnInit, ViewChild } from '@angular/core';
import { AbpSessionService } from 'abp-ng2-module';
import { AppComponentBase } from '@shared/app-component-base';
import { accountModuleAnimation } from '@shared/animations/routerTransition';
import { AppAuthService } from '@shared/auth/app-auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormConfirmEmailComponent } from 'account/form-confirm-email/form-confirm-email.component';
import { AccountServiceProxy } from '@shared/service-proxies/service-proxies';

@Component({
  styleUrls: ['./login.component.css'],
  templateUrl: './login.component.html',
  animations: [accountModuleAnimation()]
})
export class LoginComponent extends AppComponentBase implements OnInit {
  submitting = false;


  constructor(
    injector: Injector,
    public authService: AppAuthService,
    private _sessionService: AbpSessionService,
    private _accountService: AccountServiceProxy
  ) {
    super(injector);
  }
  ngOnInit(): void {
    this.checkFormForgot  = 1 ;

      this.SendToMail();
  }
  
  

  get multiTenancySideIsTeanant(): boolean {
    return this._sessionService.tenantId > 0;
  }

  get isSelfRegistrationAllowed(): boolean {
    if (!this._sessionService.tenantId) {
      return false;
    }

    return true;
  }

  login(): void {
    this.submitting = true;
    this.authService.authenticate(() => (this.submitting = false));
    
  }

  loginForm = new FormGroup({
    email: new FormControl('', Validators.required,),
    password: new FormControl('', Validators.required)
  });
  get email() { return this.loginForm.get('email'); }
  
  get password() { return this.loginForm.get('password'); }

  checkFormForgot : number ;
  CheckFormForgot(){
    this.checkFormForgot = 2;
  }

  mail: string = "";
  getMail(input : string){
    this.mail = input;
  }
  code : string = "";
  SendToMail(){
    if(this.mail != ""){
      this._accountService.sendEmail(this.mail).subscribe(result => {this.code = result});
    this.mail = "";
    this.checkFormForgot = 3;
    }
    
  }

}

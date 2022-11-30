import { Component, Injector } from '@angular/core';
import { AbpSessionService } from 'abp-ng2-module';
import { AppComponentBase } from '@shared/app-component-base';
import { accountModuleAnimation } from '@shared/animations/routerTransition';
import { AppAuthService } from '@shared/auth/app-auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  styleUrls: ['./login.component.css'],
  templateUrl: './login.component.html',
  animations: [accountModuleAnimation()]
})
export class LoginComponent extends AppComponentBase {
  submitting = false;

  constructor(
    injector: Injector,
    public authService: AppAuthService,
    private _sessionService: AbpSessionService
  ) {
    super(injector);
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

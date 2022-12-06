import { LeaveServiceProxy, NotificationServiceProxy, UserServiceProxy } from './../shared/service-proxies/service-proxies';
import { TableLeaveComponent } from './table-leave/table-leave.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientJsonpModule } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { NgxPaginationModule } from 'ngx-pagination';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceProxyModule } from '@shared/service-proxies/service-proxy.module';
import { SharedModule } from '@shared/shared.module';
import { HomeComponent } from '@app/home/home.component';
import { AboutComponent } from '@app/about/about.component';
// tenants
import { TenantsComponent } from '@app/tenants/tenants.component';
import { CreateTenantDialogComponent } from './tenants/create-tenant/create-tenant-dialog.component';
import { EditTenantDialogComponent } from './tenants/edit-tenant/edit-tenant-dialog.component';
// roles
import { RolesComponent } from '@app/roles/roles.component';
import { CreateRoleDialogComponent } from './roles/create-role/create-role-dialog.component';
import { EditRoleDialogComponent } from './roles/edit-role/edit-role-dialog.component';
// users
import { UsersComponent } from '@app/users/users.component';
import { CreateUserDialogComponent } from '@app/users/create-user/create-user-dialog.component';
import { EditUserDialogComponent } from '@app/users/edit-user/edit-user-dialog.component';
import { ChangePasswordComponent } from './users/change-password/change-password.component';
import { ResetPasswordDialogComponent } from './users/reset-password/reset-password.component';
// layout
import { HeaderComponent } from './layout/header.component';
import { HeaderLeftNavbarComponent } from './layout/header-left-navbar.component';
import { HeaderLanguageMenuComponent } from './layout/header-language-menu.component';
import { HeaderUserMenuComponent } from './layout/header-user-menu.component';
import { FooterComponent } from './layout/footer.component';
import { SidebarComponent } from './layout/sidebar.component';
import { SidebarLogoComponent } from './layout/sidebar-logo.component';
import { SidebarUserPanelComponent } from './layout/sidebar-user-panel.component';
import { SidebarMenuComponent } from './layout/sidebar-menu.component';
import { ProfileComponent } from './profile/profile.component';
import { AvatarComponent } from './avatar/avatar.component';
import { FormTableComponent } from './form-table/form-table.component';
import { InputComponent } from './input/input.component';
import { InputTimeComponent } from './input-time/input-time.component';
import { ButtonWeekComponent } from './button-week/button-week.component';
import { CalendarComponent } from './calendar/calendar.component';
import { TableItemRosterComponent } from './table-item-roster/table-item-roster.component';
import { TableItemAvailabilityComponent } from './table-item-availability/table-item-availability.component';
import { LoginComponent } from './login/login.component';
import { AgGridModule } from 'ag-grid-angular';
import { TableWeekComponent } from './table-week/table-week.component';
import { PopupComponent } from './popup/popup.component';
import { HeaderCustomComponent } from './header-custom/header-custom.component';
import { ClickOutsideModule } from 'ng-click-outside';
import { PopupFormComponent } from './popup-form/popup-form.component';
import { PreferredDayComponent } from './preferred-day/preferred-day.component';
import { UpdateImageModalComponent } from './update-image-modal/update-image-modal.component';
import { TableItemShiftOfferComponent } from './table-item-shift-offer/table-item-shift-offer.component';
import { ShiftOfferComponent } from './shift-offer/shift-offer.component';
import { RosterAndAvaiServiceProxy, ShiftOfferServiceProxy } from '@shared/service-proxies/service-proxies';
import { PopupNotificationComponent } from './popup-notification/popup-notification.component';
import { ShiftOfferModalComponent } from './shift-offer-modal/shift-offer-modal.component';
import {DataService} from './data.service';
import { NavbarCustomComponent } from './navbar-custom/navbar-custom.component';
import {FileUploadService} from './file-upload.service';
// import { ImageCropperModule } from  './';
import { ImageCropperModule } from 'ngx-image-cropper';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    // tenants
    TenantsComponent,
    CreateTenantDialogComponent,
    EditTenantDialogComponent,
    // roles
    RolesComponent,
    CreateRoleDialogComponent,
    EditRoleDialogComponent,
    // users
    UsersComponent,
    CreateUserDialogComponent,
    EditUserDialogComponent,
    ChangePasswordComponent,
    ResetPasswordDialogComponent,
    // layout
    HeaderComponent,
    HeaderLeftNavbarComponent,
    HeaderLanguageMenuComponent,
    HeaderUserMenuComponent,
    FooterComponent,
    SidebarComponent,
    SidebarLogoComponent,
    SidebarUserPanelComponent,
    SidebarMenuComponent,
    ProfileComponent,
    AvatarComponent,
    FormTableComponent,
    InputComponent,
    InputTimeComponent,
    ButtonWeekComponent,
    CalendarComponent,
    TableItemRosterComponent,
    TableItemAvailabilityComponent,
    LoginComponent,
    TableWeekComponent,
    PopupComponent,
    HeaderCustomComponent,
    PopupFormComponent,
    PreferredDayComponent,
    UpdateImageModalComponent,
    TableLeaveComponent,
    TableItemShiftOfferComponent,
    ShiftOfferComponent,
    PopupNotificationComponent,
    ShiftOfferModalComponent,
    NavbarCustomComponent

  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    ModalModule.forChild(),
    BsDropdownModule,
    CollapseModule,
    TabsModule,
    AppRoutingModule,
    ServiceProxyModule,
    SharedModule,
    AgGridModule,
    NgxPaginationModule,
    ClickOutsideModule,
    ImageCropperModule
  ],
  providers: [ShiftOfferServiceProxy,RosterAndAvaiServiceProxy,LeaveServiceProxy,NotificationServiceProxy,DataService,UserServiceProxy,FileUploadService],
  entryComponents: [
    // tenants
    CreateTenantDialogComponent,
    EditTenantDialogComponent,
    // roles
    CreateRoleDialogComponent,
    EditRoleDialogComponent,
    // users
    CreateUserDialogComponent,
    EditUserDialogComponent,
    ResetPasswordDialogComponent,
  ],
})
export class AppModule {}

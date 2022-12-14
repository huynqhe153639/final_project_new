import { CalendarComponent } from './calendar/calendar.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AppRouteGuard } from '@shared/auth/auth-route-guard';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { UsersComponent } from './users/users.component';
import { TenantsComponent } from './tenants/tenants.component';
import { RolesComponent } from 'app/roles/roles.component';
import { ChangePasswordComponent } from './users/change-password/change-password.component';
import { ProfileComponent } from './profile/profile.component';
import { ShiftOfferComponent } from './shift-offer/shift-offer.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: AppComponent,
                children: [
                    // { path: 'users', component: UsersComponent, data: { permission: 'Pages.Users' }, canActivate: [AppRouteGuard] },
                    // { path: 'roles', component: RolesComponent, data: { permission: 'Pages.Roles' }, canActivate: [AppRouteGuard] },
                    // { path: 'tenants', component: TenantsComponent, data: { permission: 'Pages.Tenants' }, canActivate: [AppRouteGuard] },
                    // { path: 'about', component: AboutComponent, canActivate: [AppRouteGuard] },
                    // { path: 'update-password', component: ChangePasswordComponent, canActivate: [AppRouteGuard] },
                    { path : 'profile', component : ProfileComponent,canActivate: [AppRouteGuard]},
                    { path : 'shiftOffer', component : ShiftOfferComponent,canActivate: [AppRouteGuard]},
                    { path : 'calendar', component : CalendarComponent,canActivate: [AppRouteGuard]}


                ]
            }
        ])
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }

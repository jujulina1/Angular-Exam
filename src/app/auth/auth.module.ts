import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LogoutComponent } from './logout/logout.component';
import { AuthRoutingModule } from './auth-routing.module';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { CoreModule } from '../core/core.module';
import { AuthenticateComponent } from './authenticate/authenticate.component';




@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    LogoutComponent,
    MyProfileComponent,
    AuthenticateComponent,
    
    

  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    AuthRoutingModule,
    CoreModule
    

  ],
  exports: [LoginComponent, RegisterComponent, LogoutComponent, MyProfileComponent, AuthenticateComponent]
})
export class AuthModule { }


import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LogoutComponent } from './logout/logout.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { AuthGuard } from '../shared/guards/auth.guard';



const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
    
  },
  {
    path: 'register',
    component: RegisterComponent
   
  },
  {
    path: 'logout',
    component: LogoutComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'profile/:id',
    component: MyProfileComponent,
    canActivate: [AuthGuard]
  },
];


export const AuthRoutingModule = RouterModule.forChild(routes);


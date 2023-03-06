import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddlistComponent } from './addlist/addlist.component';
import { AuthGardGuard } from './auth-gard.guard';
import { ForgotComponent } from './forgot/forgot.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RoleGuard } from './role.guard';
import { ShowlistComponent } from './showlist/showlist.component';
import { StudentProfileComponent } from './student-profile/student-profile.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  // {
  //   path: '',
  //   data: { roles: ['student', 'admin'] },
  //   canActivate: [AuthGardGuard],
  //   component: StudentProfileComponent,
  // },
  {
    path: 'add',
    canActivate: [AuthGardGuard],
    data: { roles: ['student', 'admin'] },
    component: AddlistComponent,
  },
  {
    path: 'list',
    canActivate: [AuthGardGuard],
    data: { roles: ['admin'] },
    component: ShowlistComponent,
  },
  {
    path: 'update/:_id',
    canActivate: [AuthGardGuard],
    data: { roles: ['student', 'admin'] },
    component: UpdateComponent,
  },
  {
    path: 'studentprofile',
    canActivate: [AuthGardGuard],
    data: { roles: ['student', 'admin'] },
    component: StudentProfileComponent,
  },

  // No Auth Routes
  { path: 'login', component: LoginComponent, },

  { path: '', redirectTo:'/login',pathMatch:'full'},
  { path: 'register', component: RegisterComponent },
  { path: 'forgot', component: ForgotComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

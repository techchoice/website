import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorizeRouting } from './authorize.routing';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';


@NgModule({
  imports: [
    CommonModule,
    AuthorizeRouting
  ],
  declarations: [LoginComponent, RegisterComponent],
  providers: [AuthService, AuthGuard]
})
export class AuthorizeModule { }

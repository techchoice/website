import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorizeRouting } from './authorize.routing';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { AuthorizeComponent } from './authorize.component';

import { MatTabsModule, MatCardModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    AuthorizeRouting,
    MatTabsModule,
    MatCardModule
  ],
  declarations: [LoginComponent, RegisterComponent, AuthorizeComponent],
  providers: [AuthService, AuthGuard]
})
export class AuthorizeModule { }

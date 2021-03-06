import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { AuthorizeComponent } from './authorize.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: 'authorize', component: AuthorizeComponent },
  { path: 'authorize/login', component: LoginComponent },
  { path: 'authorize/register', component: RegisterComponent }
];

export const AuthorizeRouting: ModuleWithProviders = RouterModule.forChild(routes);

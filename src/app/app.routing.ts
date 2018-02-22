import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminGuard } from './authorize/admin.guard';
import { CanReadGuard } from './authorize/can-read.guard';
import { AuthGuard } from './authorize/auth.guard';

const routes: Routes = [
  { path: '', loadChildren: 'app/landing/landing.module#LandingModule'},
  { path: 'authorize', loadChildren: 'app/authorize/authorize.module#AuthorizeModule'},
  { path: 'home', loadChildren: 'app/home/home.module#HomeModule', canActivate: [AuthGuard]},
  { path: 'profile', loadChildren: 'app/profile/profile.module#ProfileModule', canActivate: [AuthGuard]},
  { path: 'admin', loadChildren: 'app/admin/admin.module#AdminModule', canActivate: [AdminGuard]},
];

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(routes);

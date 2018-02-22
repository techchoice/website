import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: 'admin', component: DashboardComponent },
  { path: 'admin/dashboard', component: DashboardComponent}
];

export const AdminRouting: ModuleWithProviders = RouterModule.forChild(routes);

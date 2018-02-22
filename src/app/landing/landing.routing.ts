import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { DefaultComponent } from './default/default.component';

const routes: Routes = [
  { path: '', component: DefaultComponent },
  { path: 'landing', component: DefaultComponent },
  { path: 'landing/default', component: DefaultComponent }
];

export const LandingRouting: ModuleWithProviders = RouterModule.forChild(routes);

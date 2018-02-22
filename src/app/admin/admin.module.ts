import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRouting } from './admin.routing';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRouting
  ],
  declarations: [DashboardComponent]
})
export class AdminModule { }

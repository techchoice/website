import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRouting } from './landing.routing';
import { DefaultComponent } from './default/default.component';

@NgModule({
  imports: [
    CommonModule,
    LandingRouting
  ],
  declarations: [DefaultComponent]
})
export class LandingModule { }

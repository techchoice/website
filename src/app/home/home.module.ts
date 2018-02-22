import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRouting } from './home.routing';
import { FeedComponent } from './feed/feed.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { DiscoverComponent } from './discover/discover.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRouting
  ],
  declarations: [
    FeedComponent,
    NotificationsComponent,
    DiscoverComponent
  ]
})
export class HomeModule { }

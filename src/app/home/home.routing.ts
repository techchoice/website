import { AuthGuard } from './../authorize/auth.guard';
import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { FeedComponent } from './feed/feed.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { DiscoverComponent } from './discover/discover.component';

const routes: Routes = [
  { path: 'home', component: FeedComponent },
  { path: 'home/feed', component: FeedComponent },
  { path: 'home/notifications', component: NotificationsComponent },
  { path: 'home/discover', component: DiscoverComponent }
];

export const HomeRouting: ModuleWithProviders = RouterModule.forChild(routes);

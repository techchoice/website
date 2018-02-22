import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { UserComponent } from './user/user.component';
import { PostsComponent } from './posts/posts.component';
import { SubscriptionsComponent } from './subscriptions/subscriptions.component';

const routes: Routes = [
  { path: 'profile', component: UserComponent },
  { path: 'profile/user', component: UserComponent },
  { path: 'profile/posts', component: PostsComponent },
  { path: 'profile/subscriptions', component: SubscriptionsComponent }
];

export const ProfileRouting: ModuleWithProviders = RouterModule.forChild(routes);

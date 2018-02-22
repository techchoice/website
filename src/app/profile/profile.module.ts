import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRouting } from './profile.routing';
import { UserComponent } from './user/user.component';
import { SubscriptionsComponent } from './subscriptions/subscriptions.component';
import { PostsComponent } from './posts/posts.component';
import { CreateComponent } from './posts/create/create.component';

@NgModule({
  imports: [
    CommonModule,
    ProfileRouting
  ],
  declarations: [
    UserComponent,
    SubscriptionsComponent,
    PostsComponent,
    CreateComponent
  ]
})
export class ProfileModule { }

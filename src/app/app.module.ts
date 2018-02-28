import { environment } from './../environments/environment';
import { AppRouting } from './app.routing';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { CoreModule } from './core/core.module';
import { AuthorizeModule } from './authorize/authorize.module';
import { HomeModule } from './home/home.module';
import { ProfileModule } from './profile/profile.module';
import { AdminModule } from './admin/admin.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { ToolbarComponent } from './shared/toolbar/toolbar.component';

import { MatToolbarModule, MatMenuModule, MatIconModule, MatButtonModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ToolbarComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    NgbModule.forRoot(),
    ReactiveFormsModule,
    FlexLayoutModule,
    AppRouting,
    CoreModule,
    AuthorizeModule,
    HomeModule,
    ProfileModule,
    AdminModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { NetronixDenCommonModule } from './common/netronix-den-common.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { AppWrapperComponent } from './app-wrapper/app-wrapper.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    AppWrapperComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NetronixDenCommonModule,
    DashboardModule,
  ],
  providers: [],
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule { }

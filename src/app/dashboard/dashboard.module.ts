import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NetronixDenCommonModule } from '../common/netronix-den-common.module';

import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';

@NgModule({
  imports: [
    CommonModule,
    NetronixDenCommonModule,
  ],
  declarations: [
    DashboardHomeComponent,
  ],
  exports: [
    DashboardHomeComponent,
  ],
})
export class DashboardModule { }

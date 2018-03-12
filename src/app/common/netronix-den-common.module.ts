import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SideNavComponent } from './side-nav/side-nav.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    HeaderComponent,
    SideNavComponent,
  ],
  exports: [
    HeaderComponent,
    SideNavComponent,
  ],
})
export class NetronixDenCommonModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
    HeaderComponent,
    SideNavComponent,
    PageNotFoundComponent,
  ],
  exports: [
    HeaderComponent,
    SideNavComponent,
    PageNotFoundComponent,
  ],
})
export class NetronixDenCommonModule { }

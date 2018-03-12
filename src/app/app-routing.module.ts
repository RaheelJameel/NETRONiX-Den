import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import { HomeComponent } from './home/home.component';
import { AppWrapperComponent } from './app-wrapper/app-wrapper.component';
import { PageNotFoundComponent } from './common/page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { DownloadsComponent } from './downloads/downloads.component';

import { DashboardHomeComponent } from './dashboard/dashboard-home/dashboard-home.component';

const appRoutes: Routes = [
  {
    path: '',
    component: AppWrapperComponent,
    children: [
      { path: '', component: DashboardHomeComponent },
    ],
  },
  { path: 'dashboard', redirectTo: '', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'downloads', component: DownloadsComponent },
  { path: 'download', redirectTo: 'downloads', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      // { enableTracing: true } // <-- debugging purposes only
    ),
  ],
  exports: [
    RouterModule,
  ]
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './home/admin/admin.component';
import { CalendarComponent } from './home/calendar/calendar.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { RecruitmentComponent } from './home/recruitment/recruitment.component';
import { SettingsComponent } from './home/settings/settings.component';

const routes: Routes = [
  {
    path:"home",
    loadChildren: () => import('./home/home.module').then(mod=>mod.HomeModule)
  },
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

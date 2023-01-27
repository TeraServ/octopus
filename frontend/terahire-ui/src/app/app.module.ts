import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { RecruitmentComponent } from './home/recruitment/recruitment.component';
import { AdminComponent } from './home/admin/admin.component';
import { CalendarComponent } from './home/calendar/calendar.component';
import { SettingsComponent } from './home/settings/settings.component';
import { ProgressTableComponent } from './home/dashboard/progress-table/progress-table.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HomeComponent,
    RecruitmentComponent,
    AdminComponent,
    CalendarComponent,
    SettingsComponent,
    ProgressTableComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

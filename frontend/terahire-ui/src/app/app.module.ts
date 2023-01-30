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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserRegistrationComponent } from "./home/admin/user-registration/user-registration.component";
import { CandidateComponent } from './home/recruitment/candidate/candidate.component';
import { UserListComponent } from './home/admin/user-list/user-list.component';
import { TasksComponent } from './home/tasks/tasks.component';

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
        UserRegistrationComponent,
        CandidateComponent,
        UserListComponent,
        TasksComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        FormsModule
    ]
})
export class AppModule { }

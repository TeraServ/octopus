import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { TasksComponent } from './home/tasks/tasks.component';
import { AdminComponent } from './home/admin/admin.component';
import { UserListComponent } from './home/admin/user-list/user-list.component';
import { UserRegistrationComponent } from './home/admin/user-registration/user-registration.component';
import { CalendarComponent } from './home/calendar/calendar.component';
import { RecruitmentComponent } from './home/recruitment/recruitment.component';
import { ProgressTableComponent } from './home/dashboard/progress-table/progress-table.component';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './service/user.service';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
    declarations: [
        AppComponent,
       LoginComponent
    ],
    providers: [
        ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        NoopAnimationsModule
        
        
        
        
    ]
})
export class AppModule { }

import { NgModule } from '@angular/core';


import { HomeRoutingModule } from './home-routing.module';
import { TasksComponent } from './tasks/tasks.component';
import { AdminComponent } from './admin/admin.component';
import { UserListComponent } from './admin/user-list/user-list.component';
import { UserRegistrationComponent } from './admin/user-registration/user-registration.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { UserService } from '../service/user.service';
import { CalendarComponent } from './calendar/calendar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressTableComponent } from './dashboard/progress-table/progress-table.component';
import { RecruitmentComponent } from './recruitment/recruitment.component';
import { HomeComponent } from './home.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JobEditComponent } from './tasks/job-edit/job-edit.component';
import { JobListComponent } from './tasks/job-list/job-list.component';
import { JobComponent } from './tasks/job-registration/job-registration.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatProgressSpinner, MatProgressSpinnerModule} from '@angular/material/progress-spinner';
@NgModule({
  declarations: [
    HomeComponent,
    DashboardComponent,
    TasksComponent,
    AdminComponent,
    UserListComponent,
    UserRegistrationComponent,
    CalendarComponent,
    RecruitmentComponent,
    ProgressTableComponent,
    JobComponent,
    JobListComponent,
    JobEditComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatTableModule,
    MatDialogModule,
    MatPaginatorModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    
    
   
    

    
  
    
   
    
    
  ],
  providers:[
    UserService
  ]
 
})
export class HomeModule { }

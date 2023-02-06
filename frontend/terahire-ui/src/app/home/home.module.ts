import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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
import { ReactiveFormsModule } from '@angular/forms';


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
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    MatTableModule,
   
    
    
  ],
  providers:[
    UserService
  ]
 
})
export class HomeModule { }

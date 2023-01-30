import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TasksComponent } from './tasks/tasks.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TasksComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgModule,
    ReactiveFormsModule
  ]
})
export class HomeModule { }

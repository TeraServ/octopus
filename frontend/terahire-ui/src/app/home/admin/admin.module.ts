import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserListComponent } from './user-list/user-list.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';

             

@NgModule({
  declarations: [
   
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    
    
    
  ]
})
export class AdminModule { }

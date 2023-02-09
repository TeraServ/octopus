import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { CandidateComponent } from './Components/candidate/candidate.component';
import { UserRegistrationComponent } from './Components/user-registration/user-registration.component';
import { CandidateListComponent } from './Components/candidate-list/candidate-list.component';
import { CandidateUpdateComponent } from './Components/candidate-update/candidate-update.component';
import { UserProfileComponent } from './Components/user-profile/user-profile.component';
import { UserListComponent } from './Components/user-list/user-list.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ImageComponent } from './Components/image/image.component';
import { MatDialogModule } from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DialogComponent } from './dialog/dialog.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CandidateComponent,
    UserRegistrationComponent,
    CandidateListComponent,
    CandidateUpdateComponent,
    UserProfileComponent,
    UserListComponent,
    ImageComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    NoopAnimationsModule,
    MatTableModule,
    MatDialogModule,
    MatIconModule,
    MatFormFieldModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CandidateListComponent } from './Components/candidate-list/candidate-list.component';
import { CandidateUpdateComponent } from './Components/candidate-update/candidate-update.component';
import { CandidateComponent } from './Components/candidate/candidate.component';
import { ImageComponent } from './Components/image/image.component';
import { LoginComponent } from './Components/login/login.component';
import { UserListComponent } from './Components/user-list/user-list.component';
import { UserProfileComponent } from './Components/user-profile/user-profile.component';
import { UserRegistrationComponent } from './Components/user-registration/user-registration.component';

const routes: Routes = [

  {
    path: "",
    component: LoginComponent,
  },
  {
    path: "candidate",
    component: CandidateComponent,
  },
  {
    path: "userRegistration",
    component: UserRegistrationComponent,
  },
  {
    path: "candidateList",
    component: CandidateListComponent,
  },
  {
    path: 'candidateUpdate/:id',
    component: CandidateUpdateComponent,
  },
  {
    path: 'userProfile',
    component: UserProfileComponent,
  },
  {
    path: 'userList',
    component: UserListComponent,
  },
  {
    path: "image",
    component: ImageComponent,
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

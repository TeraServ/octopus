import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from '../login/login.model';
import { User } from '../../Model/user';
import { UserService } from '../../service/user.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  user: User;
  edit: boolean = true;
  userForm: FormGroup;


  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.getUser();
    
  }
 
  
// update list of users
  update():void{
    console.log(this.user)
    this.userService.updateUser(this.user).subscribe((result:any)=>{})    
    window.location.reload();
    alert("updated")   
  
  }

  //geting list of users
  getUser() {
    this.userService.getUserList(1).subscribe((response: any) => {
      this.user = response;
      console.log(response);
    })
  }
}

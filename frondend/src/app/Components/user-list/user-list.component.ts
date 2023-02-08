import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';
import { User } from 'src/app/Model/user';
import { UserService } from 'src/app/service/user.service';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {

  user: User[];

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    // this.getUsers();
  }

  // private getUsers() {
  //   this.userService.getUserList().subscribe(data => {

  //     console.log(data)
  //     this.user = data;
  //   })
  // }

  displayedColumns: string[] = ['Id', 'firstName', 'lastName', 'email','username'];
  dataSource = new MatTableDataSource<User>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}


const ELEMENT_DATA: User[] = [
  {id: 1, firstName: 'Alan', phoneNumber: 75670079, lastName: 'R S',email:"alan@gmail.com",username:"AlanRS"},
  
];
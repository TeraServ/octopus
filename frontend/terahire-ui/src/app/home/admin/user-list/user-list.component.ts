import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { user } from 'src/app/models/user.model';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {

  displayedColumns: string[] = ['Id', 'firstName', 'lastName', 'email','role','username'];
  dataSource = new MatTableDataSource<user>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}


const ELEMENT_DATA: user[] = [
  {id: 1, firstName: 'Alan', phoneNumber: 75670079, lastName: 'R S',email:"vfd",role:"admin",username:"fghvhj"},
  
];
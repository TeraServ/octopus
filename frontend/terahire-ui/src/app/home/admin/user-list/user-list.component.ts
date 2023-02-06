
import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { user } from 'src/app/models/user.model';
import { UserService } from 'src/app/service/user.service';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {

  constructor(private userService:UserService){}
  displayedColumns: string[] = ['Id' ,'username' , 'firstName', 'lastName','phoneNumber', 'email','role','status','actions'];
  //ELEMENT_DATA:user[]=[]
  dataSource = new MatTableDataSource<user>();
  editById:boolean[]=[]
 
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(){
    this.getAllUser()
  }
  

  editThis(index:number){
    if(this.editById[index]){
      this.editById[index] = false;
    }else{
      this.editById[index] = true;
    }
  }
  getAllUser(){
    this.userService.getAllUsers().subscribe(data =>{
     this.dataSource.data = data;
    })
    
  }
}





import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormGroupName, Validators } from '@angular/forms';
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
  formBuilder: any;

  constructor(private userService:UserService){}
  displayedColumns: string[] = ['Id' ,'username' , 'firstName', 'lastName','phoneNumber', 'email','role','status','actions'];
  //ELEMENT_DATA:user[]=[]
  dataSource = new MatTableDataSource<user>();
  editById:boolean[]=[];
  userUpdateForm!: FormGroup;
 
  @ViewChild(MatPaginator) paginator!: MatPaginator;


  @ViewChild('username') username!:ElementRef;
  @ViewChild('firstName') firstname!:ElementRef;
  @ViewChild('lastName') lastname!:ElementRef;

  @ViewChild('role') role!:ElementRef;
  @ViewChild('phoneNumber') phoneNumber!:ElementRef;
  @ViewChild('alertsuccess') alertsuccess!:ElementRef;


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(){
    this.getAllUser();
 
   
  }
  

  editThis(index:number){
    if(this.editById[index]){
      this.editById[index] = false;
    }else{
      this.editById[index] = true;
    }
  }

  updateChanges(id:number){
    let data = this.dataSource.data[id];
    let updateData:user ={
      id:data.id,
      firstName:this.firstname.nativeElement.value,
      lastName:this.lastname.nativeElement.value,
      username:this.username.nativeElement.value,
      statusId:data.statusId,
      userTypeId:this.role.nativeElement.value,
      modifiedDate:data.modifiedDate,
      createdDate:data.createdDate,
      email:data.email,
      password:data.password,
      phoneNumber:this.phoneNumber.nativeElement.value

    }
    // let basicInstance = mdb.Alert.getInstance(document.getElementById(this.alertsuccess.nativeElement));
    this.userService.updateUser(updateData).subscribe(result=>{
      console.log(result);
      this.alertsuccess.nativeElement
      this.getAllUser();
      
    })
    
    this.editById[id] = false;
    
    
  }
  
  getAllUser(){
    this.userService.getAllUsers().subscribe(data =>{
     this.dataSource.data = data;
    })
    
  }
}




import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Route, Router } from '@angular/router';

import { MatDialog } from '@angular/material/dialog';

import { MatTableDataSource } from '@angular/material/table';
import { FormControl, FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { Candidate } from 'src/app/models/candidate';
import { CandidateService } from 'src/app/service/candidate.service';
import { CandidateUpdateComponent } from '../candidate-update/candidate-update.component';
import { DialogDeleteComponent } from '../../dialog-delete/dialog-delete.component';
import { AuthService } from 'src/app/service/auth.service';



@Component({
  selector: 'app-candidate-list',
  templateUrl: './candidate-list.component.html',
  styleUrls: ['./candidate-list.component.scss']
})
export class CandidateListComponent implements OnInit {

  candidate!: Candidate[];
  @Input() CandidateData!: Candidate;
  candidates!: Candidate
  showJobEditComponent: boolean[] = [false];
  updatingJob!: Candidate;
  userType!:string;

  // candidateList:any;

  constructor(private authService:AuthService, private candidateService: CandidateService, private router: Router, public dialogRef: MatDialog, public dialog: MatDialog) { }

  displayedColumns: string[] = ['ID', 'fullName', 'email', 'PhoneNumber', 'gender', 'dob', 'address', 'country', 'city', 'nationality', 'yearOfExperience', 'currentCompany', 'currentPosition', 'currentCTC', 'expectedCTC', 'skills', 'designation', 'sociaLink', 'status', 'actions'];
  dataSource = new MatTableDataSource<Candidate>();




  ngOnInit(): void {
    // this.getCandidates();
    this.getAllUser();
    this.userType = this.authService.getRoles();
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;




  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }



  getAllUser() {
    this.candidateService.getCandidateList().subscribe(data => {
      this.dataSource.data = data;
    })

  }

  openDialog(id: number, name: string): void {
    const dialogRef = this.dialog.open(DialogDeleteComponent, {
      data: { id: id, message: "Are you sure want to delete ", username: name, funId: 2 },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed' + result);

      this.getAllUser()
    });
  }

  // //geting list of candidates
  // private getCandidates() {
  //   this.candidateService.getCandidateList().subscribe(data => {

  //     console.log(data)
  //     this.candidate = data;
  //   })
  // }

  onUpdateClicked(candidates: Candidate) {

    console.log(candidates)
    this.dialogRef.open(CandidateUpdateComponent, {
      width: '40%',
      height: '70%',
      data: candidates

    })

  }


  // deleteCandidate(id: number) {

  //     this.candidateService.deleteCandidate(id).subscribe(data => {
  //       console.log(data);
  //       this. getAllUser();
  //     })

  //   window.location.reload();

  // }
  // applyFilter(filterValue: string) {
  //   filterValue = filterValue.trim(); // Remove whitespace
  //   filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
  //   this.dataSource.filter = filterValue;      
  // }

    //Search box

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLocaleLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }

  }

}
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Candidate } from '../../Model/candidate';
import { CandidateService } from '../../service/candidate.service';
import{MatDialog} from '@angular/material/dialog';
import { CandidateUpdateComponent } from '../candidate-update/candidate-update.component';
import { MatTableDataSource } from '@angular/material/table';
import { FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';


@Component({
  selector: 'app-candidate-list',
  templateUrl: './candidate-list.component.html',
  styleUrls: ['./candidate-list.component.scss']
})
export class CandidateListComponent implements OnInit {

  candidate: Candidate[];
  @Input() CandidateData!:Candidate;
  candidates: Candidate
  showJobEditComponent:boolean[]=[false];
  updatingJob:Candidate;
  
  // candidateList:any;

  constructor(private candidateService: CandidateService, private router: Router,private dialogRef: MatDialog) { }

  displayedColumns: string[] = ['ID','fullName' ,'email' , 'PhoneNumber', 'gender','dob', 'address','country','city','zipcode','nationality','yearOfExperience','currentCompany','currentPosition','currentCTC','expectedCTC','skills','sociaLink','status','actions'];
  dataSource = new MatTableDataSource<Candidate>();
  



  ngOnInit(): void {
    // this.getCandidates();
    this.getAllUser();
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;


  

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

 

  getAllUser(){
    this.candidateService.getCandidateList().subscribe(data =>{
     this.dataSource.data = data;
    })
    
  }

  // //geting list of candidates
  // private getCandidates() {
  //   this.candidateService.getCandidateList().subscribe(data => {

  //     console.log(data)
  //     this.candidate = data;
  //   })
  // }

  onUpdateClicked(candidates:Candidate){
    
    this.dialogRef.open(CandidateUpdateComponent,{ 
      width:'40%', 
      height:'80%' ,    
      data: candidates 
      
    });
    
  }

  deleteCandidate(id: number) {
    if (confirm("Are you sure want to delete this candidate")) {
      this.candidateService.deleteCandidate(id).subscribe(data => {
        console.log(data);
        this. getAllUser();
      })
    }

  }
}

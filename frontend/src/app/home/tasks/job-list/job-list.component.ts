import { Component,Input,OnInit, ViewChild } from '@angular/core';
import { Job } from 'src/app/models/job';
import { JobService } from 'src/app/service/job.service';
import{MatDialog} from '@angular/material/dialog'
import { JobEditComponent } from '../job-edit/job-edit.component';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.scss']
})
export class JobListComponent implements OnInit {
  
 
  @Input()JobData!:Job
  showJobEditComponent:boolean[]=[false];
  constructor(private jobService:JobService, private router:Router,private dialogRef: MatDialog) { }
  displayedColumns: string[] = ['title','owner','stage','status','vacancy','activeCandidates','droppedCandidates','summary','teamID','scoreCard','actions']
  dataSource = new MatTableDataSource<Job>();

  ngOnInit(): void {
    this.getAllJobs();
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  private getAllJobs(){ 
     this.jobService.getJobList().subscribe(data=>{
      this.dataSource.data=data;
    });
  }
  onDeleteClicked(id:number){
    if(confirm("Are you sure you want to delete ?")){
    this.jobService.deleteJob(id).subscribe(err=>{
      console.log(err)
    });
  }
    // location.reload();
  }
  onUpdateClicked(job:Job){
    this.dialogRef.open(JobEditComponent,{ 
      data:  job ,
      width:'50%'
    });
    console.log('Update Clicked');
  }
  
}

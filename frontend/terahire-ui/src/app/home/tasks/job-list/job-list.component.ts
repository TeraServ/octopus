import { Component, Input, OnInit, Output } from '@angular/core';
import { Job } from 'src/app/models/job';
import { JobService } from 'src/app/service/job.service';
import{MatDialog} from '@angular/material/dialog'
import { JobEditComponent } from '../job-edit/job-edit.component';




@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.scss']
})
export class JobListComponent implements OnInit {
  @Input() JobData!:Job;
  
  jobs!:Job;
  showJobEditComponent:boolean[]=[false];
  updatingJob!:Job;
  // updatedJob: Job;

  constructor(private jobService:JobService, private dialogRef: MatDialog) { }
  jobList:any;

  ngOnInit(): void {
    this.getjobs();
    
    // console.log(this.jobList);
  }
  private getjobs(){ 
     this.jobService.getJobList().subscribe(data=>{
      this.jobList=data;
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
    // this.showJobEditComponent[job.id]=true;
    this.dialogRef.open(JobEditComponent,{ 
      data:  job 
    });
  }
  
}

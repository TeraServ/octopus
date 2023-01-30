import { Component, OnInit } from '@angular/core';
import { JobService } from '../job.service';
import { Job } from '../models/job';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.scss']
})
export class JobListComponent implements OnInit {
  jobs:Job[];

  constructor(private jobService:JobService) { }
  jobList:any;

  ngOnInit(): void {
    this.getjobs();
    console.log(this.jobList);
  }
  private getjobs(){ 
     this.jobService.getJobList().subscribe(data=>{
      this.jobList=data;
    });
  }



}

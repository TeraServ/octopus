import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { JobService } from 'src/app/service/job.service';



@Component({
  selector: 'app-job',
  templateUrl: './job-registration.component.html',
  styleUrls: ['./job-registration.component.scss']
})
export class JobComponent implements OnInit {
  submitted: boolean = false;
  jobRegistration!: FormGroup;
  
  

  constructor(private formBuilder:FormBuilder, private jobService: JobService) { }

  ngOnInit(){
    this.jobRegistration = this.formBuilder.group({
      title:['',Validators.required],
      owner:['',Validators.required],
      stage:['',Validators.required],
      status:['',Validators.required],
      vacancy:['',Validators.required],
      activeCandidates:['',Validators.required],
      droppedCandidates:['',Validators.required],
      summary:['',Validators.required],
      teamID:['',Validators.required],
      scoreCard:['',Validators.required],
    });
  }
  get fnCtrl() { return this.jobRegistration.controls; }
  onSubmit(){
    
    if(!this.jobRegistration.valid){return alert("Invalid Entries");}
    else{
      this.jobService.createJob(this.jobRegistration.value).subscribe(data=>{
        console.log(data);
        this.submitted=true;
      });
      this.jobRegistration.clearValidators();
      this.jobRegistration.reset();
      alert("Successfully Added");
    }
    }


}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss']
})
export class JobComponent implements OnInit {
  submitted: boolean = false;
  jobRegistration: FormGroup;
  

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(){
    this.jobRegistration = this.formBuilder.group({
      title:['',Validators.required],
      owner:['',Validators.required],
      stage:['',Validators.required],
      status:['',Validators.required],
      activeCandidates:['',Validators.required],
      droppedCandidates:['',Validators.required],
      summary:['',Validators.required],
      teamID:['',Validators.required],
      scoreCard:['',Validators.required],
    });
  }
  get fnCtrl() { return this.jobRegistration.controls; }
  onSubmit(){
    this.submitted=true;
    if(this.jobRegistration.invalid){return;}
    alert("Success");
    console.log(this.jobRegistration.value);
  }

}

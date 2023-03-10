import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { JobService } from 'src/app/service/job.service';



@Component({
  selector: 'app-job',
  templateUrl: './job-registration.component.html',
  styleUrls: ['./job-registration.component.scss']
})
export class JobComponent implements OnInit {

  
  
  jobRegisterForm!: FormGroup;
  submitted:boolean = false;

  constructor(private formBuilder: FormBuilder,private jobService: JobService,private _snackBar:MatSnackBar) { }

  

  ngOnInit(): void {
    this.jobRegisterForm = this.formBuilder.group({   
      title: ['',[Validators.required]],
      owner:['',[Validators.required]],   
      stage:['',[Validators.required]],    
      status: ['',[Validators.required]],
      vacancy:['',Validators.required],
      activeCandidates:['',Validators.required],
      droppedCandidates:['',Validators.required],
      summary:['',Validators.required],
      teamID:['',Validators.required],
      scoreCard:['',Validators.required],
      notification: ['']
  });
   
    console.log(this.jobRegisterForm)
  }

  openSnackBar(message:string){
    this._snackBar.open(message,'',{
      duration:3000
    })
   
  }

  get f() { return this.jobRegisterForm.controls; }


    onSubmit() {
      //   title:"Job Registration",
      //   body: "New job "+this.f.title.value+" was created by "+this.f.owner.value+".",
      //   notificationType: 0,
      //   notificationStatus:102,
      //   createdDate:"",
      //   modifiedDate:"",
      //   id:0,
    
      // }

      this.f.notification.setValue({
        title:"Job Registration",
        body: "New job "+this.f.title.value+" was created by "+this.f.owner.value+".",
        notificationType: 0,
        notificationStatus:102,
        createdDate:"",
        modifiedDate:"",
        id:0,
    
      })
        this.submitted = true;
       // this.jobRegisterForm.get('notification')?.setValue(this.notification)
        console.log(this.jobRegisterForm.value)
        // stop here if form is invalid
        if (this.jobRegisterForm.invalid) {
          console.log("Error");
            return;
        }else{
          
          this.jobService.createJob(this.jobRegisterForm.value).subscribe(response=>{
            console.log(response);
            this.openSnackBar("Successfully created.")
            this.jobRegisterForm.reset();
            this.submitted = false;
          },error=>{

          })
     //window.location.reload()
       
    }
  }
}

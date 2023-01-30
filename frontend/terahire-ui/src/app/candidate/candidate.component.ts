import { Component, OnInit } from '@angular/core';
import { ModuleTeardownOptions } from '@angular/core/testing';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.scss']
})
export class CandidateComponent implements OnInit {

  candidateForm: FormGroup;
  submitted = false;  
  

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {


    this.candidateForm = this.formBuilder.group({

      fullname: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      dob: ['', [Validators.required]],
      address: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required]],
      city: ['', [Validators.required]],
      country: ['', [Validators.required]],
      nationality: ['', [Validators.required]],
      currentCompany: ['', [Validators.required]],
      currentPosition: ['', [Validators.required]],
      currentCTC: ['', [Validators.required]],
      expectedCTC: ['', [Validators.required]],
      yoe: ['', [Validators.required]],
      skills: ['', [Validators.required]],
      gender: ['1']

    });

    //for disabling input fields
    var options = {
      onlySelf: true,
      emitEvent: false,
    }
    this.candidateForm.get('yoe').valueChanges.subscribe((x) => {

      if (x == '1') {
        this.candidateForm.get('currentCompany').disable(options);
        this.candidateForm.get('currentPosition').disable(options);
        this.candidateForm.get('currentCTC').disable(options);
        this.candidateForm.get('expectedCTC').disable(options);
      }
      else{
        this.candidateForm.get('currentCompany').enable(options);
        this.candidateForm.get('currentPosition').enable(options);
        this.candidateForm.get('currentCTC').enable(options);
        this.candidateForm.get('expectedCTC').enable(options);
      }
    })
    
  }
  

  get f() { return this.candidateForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.candidateForm.invalid) {
      return;
    }
    alert('SUCCESS');
  }
  


}

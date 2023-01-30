import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss']
})
export class UserRegistrationComponent implements OnInit {
  userRegisterForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

 

  ngOnInit(): void {
    this.userRegisterForm = this.formBuilder.group({   
      firstname: ['',[Validators.required]],
      lastname:['',[Validators.required]],   
      username:['',[Validators.required]],    
      
      email: ['', [Validators.required, Validators.email]],
      
      dob:['',[Validators.required]],
      role:['',[Validators.required]],  
      phonenumber: ['',[Validators.required],Validators.pattern("^[0-9]*$"),Validators.minLength(10)],
      password:['', [Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]]   
  });
  }

  get f() { return this.userRegisterForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.userRegisterForm.invalid) {
            return;
        }

        
        // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
        alert('User Created');
        this.userRegisterForm.get('firstname')!.clearValidators();
        this.userRegisterForm.get('lastname')!.clearValidators();
        this.userRegisterForm.get('username')!.clearValidators();
        this.userRegisterForm.get('password')!.clearValidators();
        this.userRegisterForm.get('email')!.clearValidators();
        this.userRegisterForm.get('phonenumber')!.clearValidators();
        this.userRegisterForm.get('dob')!.clearValidators();
        this.userRegisterForm.get('role')!.clearValidators();
        this.userRegisterForm.reset();
        
    }

}

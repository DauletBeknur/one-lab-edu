import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators, AbstractControl} from "@angular/forms";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      login: [null, Validators.required],
      name: new FormControl(null, [
        Validators.required
      ]),
      surname: new FormControl(null, [
        Validators.required,
        Validators.minLength(3)
      ]),
      email:  new FormControl(null, [
        Validators.required,
        Validators.email
      ]),
      tel:  new FormControl(null, [
        Validators.required,
        Validators.minLength(5),
        Validators.pattern("[0-9]{11}")
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(5)
      ]),
      pasVerification:new FormControl(null, [
        Validators.required,
        Validators.minLength(5)
      ]) 
    },
    {
      validator: this.matchPassword('password', 'pasVerification')
  })
     
  }

  submit(e) {
    e.preventDefault();
    console.log(this.form);
  }

  matchPassword(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];

        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            
            return;
        }

        
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true });
        } else {
            matchingControl.setErrors(null);
        }
    }
}


}

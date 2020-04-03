import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators, AbstractControl} from "@angular/forms";
import { AuthService } from 'src/app/shared/auth.service';
import { User } from 'src/app/shared/models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      login: [null, Validators.required],
      // name: new FormControl(null, [
      //   Validators.required
      // ]),
      // surname: new FormControl(null, [
      //   Validators.required,
      //   Validators.minLength(3)
      // ]),
      email:  new FormControl(null, [
        Validators.required,
        Validators.email
      ]),
      // tel:  new FormControl(null, [
      //   Validators.required,
      //   Validators.minLength(5),
      //   Validators.pattern("[0-9]{11}")
      // ]),
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


createNewUser(login:string, email: string, password: string) {
    this.authService.createUser(login, email, password).subscribe((user: User)=>{
      console.log(user);
    });
    this.router.navigate(['/home'])
  }


}

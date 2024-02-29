import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent  {
  registerForm = new FormGroup({
    userName: new FormControl('' , Validators.required),
    firstName: new FormControl('' , Validators.required),
    lastName: new FormControl('' , Validators.required),
    mobileNumber: new FormControl(''),
    password: new FormControl('' , Validators.required),
    confirmPassword: new FormControl('' , Validators.required),
  });
  constructor() {
  }

  onSubmitFor(): void{
    if (this.registerForm.invalid){
      this.registerForm.markAllAsTouched();
    }
   const form =  this.registerForm.getRawValue();
  }

}

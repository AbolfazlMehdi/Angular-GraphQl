import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms"; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm = new FormGroup({
    userName: new FormControl('' , Validators.required),
    password: new FormControl('' , Validators.required),
  });
  constructor() {
  }

  onSubmitFor(): void{
    if (this.loginForm.invalid){
      this.loginForm.markAllAsTouched();
    }
   const form =  this.loginForm.getRawValue();
  }


}

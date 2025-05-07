import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(private _formBuilder: FormBuilder,private router: Router) 
{
    this.registerForm = this._formBuilder.group({
      gender: ['', [Validators.required]],
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      nickname: ['', [Validators.required]],
      phone: ['', [Validators.required,Validators.pattern('[0-9]{10}')]],
      email: ['', [Validators.required,Validators.required, Validators.email]],
      citizenID: ['', [Validators.required, Validators.pattern('[0-9]{13}')]],
      birthday: ['', [Validators.required]],
      password: ['', [Validators.required]],
      confirmpassword: ['', [Validators.required]]
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      console.log('Form Submitted', this.registerForm.value);
      this.router.navigate(['/login']);
    } else {
      console.warn('Form is invalid');
      this.registerForm.markAllAsTouched(); 
    }
  }
  Back(){
    this.router.navigate(['/login']);
  }
  
}

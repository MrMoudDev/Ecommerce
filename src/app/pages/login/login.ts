import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators, ɵInternalFormsSharedModule } from "@angular/forms";


@Component({
  selector: 'app-login',
  imports: [ɵInternalFormsSharedModule,
    ReactiveFormsModule,
  ],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  formData = new FormGroup({
    correo: new FormControl( '', [Validators.required, Validators.email]),
    password: new FormControl( '', [Validators.required, Validators.minLength(8), Validators.maxLength(12)]),
  });

  loginSubmit(){
    if (this.formData.valid) {
      console.log(this.formData.value)
    }

    this.formData.reset()
  }
}
import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [ ReactiveFormsModule, CommonModule],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {
    formData = new FormGroup({

      name: new FormControl('', [Validators.required]),
      correo: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(12)])
    })
    registerSubmit() {
      console.log(this.formData.value)

      if( this.formData.valid ) {
        console.log( this.formData.value)
      }

      this.formData.reset()
    }
}

import { routes } from './../app.routes';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  private _fb = inject(FormBuilder)
  private _router = inject(Router)

  loginForm = this._fb.group({
    email: [''],
    password: ['']
  })

  onLogin(){
    const getEmail = localStorage.getItem('email')
    const getPassword = localStorage.getItem('password')

    if(this.loginForm.get('email')?.value == getEmail && this.loginForm.get('password')?.value == getPassword){
      this._router.navigate(['/resume'])
    }
    else{
      alert("Invalid Login")
    }
    console.log(getEmail, getPassword)
  }
}

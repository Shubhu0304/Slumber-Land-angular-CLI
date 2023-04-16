import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {AuthApiService} from '../../../auth-api.service'
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private user:AuthApiService, private router:Router){
    let UserEmail = JSON.parse(localStorage.getItem("UserEmail"))
    if(UserEmail != undefined){
      this.router.navigate(['/'])
    }
  }
  showAlert = false
  showRedAlert = false
  message
  loginCredentials
  login(data){
    // console.log("data", data)
    
    this.user.loginApi(data).subscribe(res=>{
      console.log("Response from login backend", res)
      this.loginCredentials=res
      if(this.loginCredentials?.token){
        localStorage.setItem("LoginToken", JSON.stringify(this.loginCredentials.token))
        localStorage.setItem("UserEmail", JSON.stringify(this.loginCredentials.credentials.email))
        this.user.isLoggedIn= true
        this.user.UserEmail = this.loginCredentials.credentials.email
        this.showRedAlert=false
        this.showAlert= true
        this.message = this.loginCredentials.message
      }
      else{
        this.showAlert=false
       this.showRedAlert = true
       this.message = this.loginCredentials.message


      }
    })

  }
  navigate(){
    this.router.navigate(['/'])
    
  }
  removeRedAlert(){
    this.showRedAlert=false
  }
  loginValidationForm = new FormGroup({
    email: new FormControl('', [Validators.email,Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthApiService  } from 'src/app/auth-api.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  constructor(private user:AuthApiService, private router:Router){
  }
  showAlert = false
  showRedAlert = false
  message
  loginCredentials
  signUp(data){
    // console.log("data", data)
    
    this.user.signUpApi(data).subscribe(res=>{
      console.log("Response from signUp backend", res)
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
    },
    err=>{
      console.log("error check", err)
      this.showAlert=false
      this.showRedAlert = true
      this.message =err.error?.text
    })
  }
  navigate(){
    this.router.navigate(['/'])
    
  }
  removeRedAlert(){
    this.showRedAlert=false
  }
}

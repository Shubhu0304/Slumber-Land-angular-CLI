import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthApiService } from './auth-api.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'frontend';
  LoginToken;
 
  UserEmail 
  isLoggedIn = false
  constructor(private route:Router, private user: AuthApiService){
    let UserEmail = JSON.parse(localStorage.getItem("UserEmail"))
    if(UserEmail != undefined){
      console.log("UserEMail check", UserEmail)
      this.user.UserEmail = UserEmail;
      this.user.isLoggedIn = true
    }
   }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.route.events.subscribe((event)=>{
      if (event.constructor.name === "NavigationEnd") {
        this.isLoggedIn = this.user.isLoggedIn
        this.UserEmail = this.user.UserEmail
      }
    }
  )
  }
 
  logout(){
  this.user.logout()
  this.isLoggedIn = this.user.isLoggedIn
  }
}

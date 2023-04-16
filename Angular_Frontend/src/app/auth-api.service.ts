import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthApiService {

  constructor(private http: HttpClient) {

  }
  isLoggedIn = false
  UserEmail
  public loginApi(data) {
    let body = { ...data, userType: "User" }
    console.log("body check", body)
    let url = "http://localhost:8000/login"
    return this.http.post(url, body);
  }


  public signUpApi(data) {
    let body = { ...data, userType: "User" }
    console.log("body check", body)
    let url = "http://localhost:8000/signUp"
    return this.http.post(url, body);
  }
  public logout() {
    this.isLoggedIn = false
    this.UserEmail = ""
    localStorage.removeItem("LoginToken")
    localStorage.removeItem("UserEmail")

    return this.isLoggedIn
  }
  globalULogCheck = new BehaviorSubject(this.isLoggedIn);

}

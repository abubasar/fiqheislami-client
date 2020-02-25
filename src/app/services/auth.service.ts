import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { User } from "../user";
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: "root"
})
export class AuthService {
  //private _registerUrl="http://localhost:/api/register"
  private _loginUrl = environment.baseApiUrl+"user/login/authenticate";
  constructor(private http: HttpClient, private _router: Router) {}

  // registerUser(user){
  //   return this.http.post<any>(this._registerUrl,user)
  // }

  loginUser(user: User): Observable<any> {
    return this.http.post<any>(this._loginUrl, user);
  }

  logoutUser() {
    localStorage.removeItem("token");
    this._router.navigate(["/list"]);
  }

  loggedIn() {
    return !!localStorage.getItem("token");
  }
  getToken() {
    return localStorage.getItem("token");
  }
}

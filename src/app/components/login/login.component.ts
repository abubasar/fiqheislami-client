import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  model:User
  constructor(private _auth:AuthService,private _router:Router) { 
    this.model=new User();
  }

  ngOnInit() {
  }

  loginUser(){
   this._auth.loginUser(this.model)
   .subscribe(
    res=>{
      console.log(res)
      //jwt 3rd step:save that token in the browsers local storage
      localStorage.setItem('token',res.token)
      this._router.navigate(['list'])

    }, 
     err=>console.log(err)
   )
  }
}


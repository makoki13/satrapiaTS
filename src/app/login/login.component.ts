import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email:String;
  password:String;
  router:Router;

  constructor(private _router:Router) {
    this.router=_router;
   }

  ngOnInit() {
  }

  checkEmailPassword(){
    if(this.email=="chucknorris@gmail.com" && this.password=="idontneedapassword"){
      alert("Success");
      this.router.navigate(['./home']);
    }else{
      alert("Wrong email or password");
    }
  }

}

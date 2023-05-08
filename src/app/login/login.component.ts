import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent 
{
  ngOnInit(): void 
  {
  }
  
  constructor(public router:Router)
  {

  }

  myUser: User = new User('Administrator', 'Administrator', 'admin@example.com', 'password');

  loginForm = new FormGroup
  (
    {
      username: new FormControl(''),
      password: new FormControl('')
    }
  );

  login() 
  {
    let uname =this.loginForm.get('username')?.value;
    let pw = this.loginForm.get("password")?.value;

    if(uname === 'admin' && pw === 'mySecretPassword')
    {
      this.router.navigate(["home"]);
    }
    else
    {
      console.log('You\'re not loged in')
    }
  }
}

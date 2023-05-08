import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../user';
import { DataProviderService } from '../services/data-provider.service';

@Component({
  selector: 'app-client-management',
  templateUrl: './client-management.component.html',
  styleUrls: ['./client-management.component.css']
})

export class ClientManagementComponent 
{
  //Get the already created data
  // myUserArray = this.service.getUsers();
  myUserArray:User[] = [];
  found:boolean = false;

  ngOnInit(): void 
  {
    this.myUserArray = this.service.getUsers();
  }

  constructor(public router:Router, private service:DataProviderService)
  {
  }

  createUser = new FormGroup
  (
    {
      firstName: new FormControl(''),
      lastName: new FormControl(''), 
      email: new FormControl(''),
      password: new FormControl('')
    }
  );

  createNewUser()
  {
    let fName =this.createUser.get('firstName')?.value!;
    let lName =this.createUser.get('lastName')?.value!;
    let email =this.createUser.get('email')?.value!;
    let pWord =this.createUser.get('password')?.value!;
    
    //Create a new object of type user
    let myUser = new User(fName, lName, email, pWord);

    
    console.log(this.myUserArray);

    // //Add it to the list of known users.
    for(var record in this.myUserArray)
    {
      if(record.at(2) === myUser.email)
      {
        this.found = true;
        console.log("Error! Record already exists!")
      }
    }

    if(this.myUserArray.length === 0 || this.found === false)
    {
      this.service.addUser(myUser);
      console.log("User Added");
      console.log(this.service.getUsers());
      this.createUser.reset();
    }
    
    // console.log(this.myUserArray);
  }
}
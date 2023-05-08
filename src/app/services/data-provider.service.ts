import { Injectable } from '@angular/core';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class DataProviderService {

  constructor() { }

  myUserArray : User[]= [];

  addUser(myUser:User)
  {
    this.myUserArray.push(myUser);
  }

  getUsers()
  {
    return this.myUserArray;
  }
}

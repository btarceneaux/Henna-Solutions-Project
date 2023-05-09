import { Injectable } from '@angular/core';
import { User } from '../user';
import { Meeting } from '../meeting';

@Injectable({
  providedIn: 'root'
})
export class DataProviderService {

  constructor() { }

  myUserArray : User[]= [];
  myMeetingArray : Meeting[] = [];

  addUser(myUser:User)
  {
    this.myUserArray.push(myUser);
  }

  getUsers()
  {
    return this.myUserArray;
  }

  createMeeting(myMeeting:Meeting)
  {
    this.myMeetingArray.push(myMeeting);
  }

  getMeetings()
  {
    return this.myMeetingArray;
  }
}

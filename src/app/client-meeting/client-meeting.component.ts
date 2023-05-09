import { Component } from '@angular/core';
import { User } from '../user';
import { Router } from '@angular/router';
import { DataProviderService } from '../services/data-provider.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Meeting } from '../meeting';

@Component({
  selector: 'app-client-meeting',
  templateUrl: './client-meeting.component.html',
  styleUrls: ['./client-meeting.component.css']
})
export class ClientMeetingComponent 
{
  myUserArray:User[] = [];
  myMeetingArray:Meeting[] = [];

  ngOnInit(): void 
  {
    this.myUserArray = this.service.getUsers();
    this.myMeetingArray = this.service.getMeetings();
  }

  constructor(public router:Router, private service:DataProviderService)
  {
  }

  createAppointment = new FormGroup
  (
    {
      user: new FormControl(''),
      meetingDate: new FormControl(''),
      meetingTime: new FormControl(''),
      personIndex: new FormControl('')
    }
  );

  createNewAppointment()
  {
    let meetingDate =this.createAppointment.get('meetingDate')?.value!;
    let meetingTime =this.createAppointment.get('meetingTime')?.value!;
    let selectedUser = this.createAppointment.get('user')?.value!;

    let myMeeting = new Meeting(selectedUser, meetingDate, meetingTime);
    console.log("Now scheduling a meeting:");
 
    console.log(myMeeting);

    this.service.createMeeting(myMeeting);
  }
}
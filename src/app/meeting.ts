import { Time } from "@angular/common";

export class Meeting
{
    email: string;
    date: string;
    time: string;

    constructor(email:string, date:string, time:string)
    {
        this.email = email;
        this.date = date;
        this.time = time;
    }
}
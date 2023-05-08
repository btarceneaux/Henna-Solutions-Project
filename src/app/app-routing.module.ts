import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientManagementComponent } from './client-management/client-management.component';
import { ClientMeetingComponent } from './client-meeting/client-meeting.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = 
[
  {path: 'manageClients', component:ClientManagementComponent},
  {path: 'manageClientMeetings', component:ClientMeetingComponent},
  {path: 'home', component:HomeComponent},
  {path: '', component:LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

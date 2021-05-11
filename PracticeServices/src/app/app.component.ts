import { Component } from '@angular/core';
import { UserServices} from "./user.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 
 constructor(private userservice:UserServices) {

 }

 activeUsers=this.userservice.activeUsers;
 inactiveUsers = this.userservice.inactiveUsers; 

}

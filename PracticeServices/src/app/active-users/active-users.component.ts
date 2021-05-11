import { Component, OnInit,Input, } from '@angular/core';
import {UserServices} from "../user.service";
import {CounterServices} from "../counter.service";

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.scss']
})
export class ActiveUsersComponent implements OnInit {
  @Input() users:string[]=[];
  

  constructor(private userservice:UserServices,private counter:CounterServices) { }

  ngOnInit(): void {
  }

onSetToInactive(id:number){
this.userservice.onSetToInactive(id);
this.counter.incrementActiveToInactive();
}

}

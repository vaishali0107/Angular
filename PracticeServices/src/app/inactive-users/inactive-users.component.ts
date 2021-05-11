import { Component, OnInit,Input } from '@angular/core';
import { CounterServices } from '../counter.service';
import { UserServices} from "../user.service";

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.scss']
})
export class InactiveUsersComponent implements OnInit {
  @Input() users:string[]=[];
  
  constructor(private userservices:UserServices,private counter:CounterServices) { }

  ngOnInit(): void {
  }

  onSetToActive(id:number){
      this.userservices.onSetToActive(id);
      this.counter.incrementInactiveToActive();
  }

}

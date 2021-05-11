import { Component, Input,  Output,EventEmitter } from '@angular/core';
import { from } from 'rxjs';
import { AccountServices } from '../account.service';
import {LoggingService} from "../logging.service";
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
  //providers:[LoggingService]
})
export class AccountComponent  {
@Input() account:{name:string,status:string}={name:"",status:""};
@Input() id:number=0;

constructor(private LoggingService:LoggingService,private accountservices:AccountServices){

}

onSetTo=(status:string)=>{
  //this.statusChanged.emit({id:this.id,newStatus:status});
  //console.log("Server status is changed and new status is",status);
  //this.LoggingService.logStatusChange(status);
  this.accountservices.updateStatus(this.id=this.id,status);
  this.accountservices.statusUpadated.emit(status);
}

}

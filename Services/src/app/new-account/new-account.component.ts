import { Component } from '@angular/core';
import { AccountServices } from '../account.service';
import {LoggingService} from "../logging.service";


@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.scss'],
  //providers:[LoggingService]
})
export class NewAccountComponent  {
//@Output() accountAdded=new EventEmitter<{name:string,status:string}>()

  constructor(private loggingService:LoggingService,
    private accountServices:AccountServices) {
this.accountServices.statusUpadated.subscribe((status:string)=>alert("New status is "+status));
   }

  

  onCreateAccount(accountName:string,accountStatus:string){
      //this.accountAdded.emit({name:accountName,status:accountStatus})
      //console.log("new stuatus is",accountStatus);(using Services for this)
      //const service=new LoggingService();
      //service.logStatusChange(accountStatus);(should not use this way to access services inseted use dependancy injector)
     // this.loggingService.logStatusChange(accountStatus);
      this.accountServices.onAccountAdd(accountName,accountStatus);
    };
    
}

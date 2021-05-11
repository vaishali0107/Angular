import { Injectable,EventEmitter } from "@angular/core";

import { LoggingService } from "./logging.service";

@Injectable()
export class AccountServices{
    accounts = [
        {
          name:"Master Account",
          status:"active"
        },
        {
          name:"Test Account",
          status:"inactive"
        },
        {
          name:"Hidden Account",
          status:"unknown"
        }
      ];

      statusUpadated= new EventEmitter<String>();

      constructor(private loggingService:LoggingService){
        
      }

      onAccountAdd(name:string,status:string){
        this.accounts.push({name:name,status:status});
        this.loggingService.logStatusChange(status);
    }
    updateStatus(id:number,status:string){
        this.accounts[id].status=status;
        this.loggingService.logStatusChange(status);
    }
}
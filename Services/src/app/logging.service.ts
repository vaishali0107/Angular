import {Component, Injectable} from "@angular/core";
@Injectable()
export class LoggingService{
    logStatusChange(status:string){
        console.log("New Status is",status);
    }
}
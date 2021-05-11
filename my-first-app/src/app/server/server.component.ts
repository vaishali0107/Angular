import { Component, OnInit } from "@angular/core";

@Component({
//selector:'[app-server]',
//selector:'.app-server',
selector:"app-server",
templateUrl:"./server.component.html",
styleUrls: ['./server.component.scss']
})
export class ServerComponent {
    serverId:number = 10;
    serverStatus:string="";
    setServer:boolean = true;
    serverCreation:string="No Server Created.";
    serverName="";
    serverCreated=false;
    servers =["testServer" ,"testServer2"]

    constructor(){
    setTimeout(() => {
        this.setServer = false;
    },2000);

    this.serverStatus=Math.random()>0.5?"online":"offline"
    }
    getColor=()=>{
         return this.serverStatus==="online"?"green":"red"
    }

    onCreation=()=>{
        this.servers.push(this.serverName);
        this.serverCreated=true;
        return this.serverCreation="Server was Created. name is "+ this.serverName;
    }
    onUpdateServerName=(event:Event)=>{
       return this.serverName=(<HTMLInputElement>event.target).value;
    }
}
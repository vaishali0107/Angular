import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ComponentsAndDataBinding';
  servers=[{ type:"server",name:"Linux",content:"Linux Server Added"}];
  
  onServerAdded(serverData:{serverName:string,serverContent:string}){
    this.servers.push({
      type:"server",
      name:serverData.serverName,
      content:serverData.serverContent
    })
  }

  onBlueprintAdded(blueprintData:{serverName:string,serverContent:string}){
    this.servers.push({
      type:"blueprint",
      name:blueprintData.serverName,
      content:blueprintData.serverContent
    })
  }
  
  onDestroy(){
    this.servers.pop();
  }
}

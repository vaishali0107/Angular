import { Component, OnInit,EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.scss']
})
export class CockpitComponent implements OnInit {
 @Output() serverCreated=new EventEmitter<{serverName:string,serverContent:string}>();
 @Output() blueprintCreated=new EventEmitter<{serverName:string,serverContent:string}>();
  newServerName="";
  newServerContent= "";
  constructor() { }

  ngOnInit(): void {
  }
  onAddServer(nameInput:HTMLInputElement,contentInput:HTMLInputElement){
    console.log(nameInput.value);
    //this.serverCreated.emit({serverName:this.newServerName,serverContent:this.newServerContent})
    this.serverCreated.emit({serverName:nameInput.value,serverContent:contentInput.value})
  }

  onAddBlueprint(nameInput:HTMLInputElement,contentInput:HTMLInputElement){
    //this.blueprintCreated.emit({serverName:this.newServerName,serverContent:this.newServerContent});
    this.blueprintCreated.emit({serverName:nameInput.value,serverContent:contentInput.value});
  }
  
}

import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
selector: 'app-game-control',
templateUrl: './game-control.component.html',
styleUrls: ['./game-control.component.scss']
})
export class GameControlComponent implements OnInit {
@Output()intervalFired=new EventEmitter<number>();
interval:any;
number:number=0;

constructor() { }
onStart=()=>{
    this.interval=setInterval(()=>{
        this.intervalFired.emit(this.number);
        this.number++;
    },1000)
    this.number=0;
}

onStop=()=>{
    clearInterval(this.interval);
}
ngOnInit() {
}
}
import { Component } from '@angular/core';

@Component({
selector: 'app-root',
templateUrl: './app.component.html',
styleUrls: ['./app.component.scss']
})
export class AppComponent {
oddArr:number[]=[];
evenArr:number[]=[];

onIntervalFired(data:number){
    if(data%2===0){
        this.evenArr.push(data);
        console.log(data)
    }
    else{
        this.oddArr.push(data);
        console.log(data)
    }
}    

}



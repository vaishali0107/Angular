import { Component, OnDestroy, OnInit } from '@angular/core';
import {interval,Observable,Subscription ,Observer, of} from "rxjs";
import {map,filter} from "rxjs/operators";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private  firstObservableSubscription:Subscription=of(0).subscribe();
  
  constructor() {}

  ngOnInit(): void {
    /*this.firstObservableSubscription = interval(1000).subscribe(count=>{
      console.log(count);
    });*/
    var count=0;
    const customInterval=Observable.create((observer:Observer<number>)=>{
      setInterval(()=>{
          observer.next(count);
          if(count==2){
            observer.complete();
          }
          if(count>5){
            observer.error(new Error("Count is greater than 5."));
          }
          count++;
      },1000)
    });//error cancels the observables and then it never gets completed.

    this.firstObservableSubscription=customInterval.pipe(filter((data:number)=>{
      return data>0;
    }),map((data:Number)=>{
      return "Round" +" "+ (+data+1);
    }))
.subscribe((data:Number)=>{
      console.log(data)
    },(error:string)=>{
      console.log(error);
      alert(error);
    },()=>{
      console.log("Observer task completed.")
    });
  }

  ngOnDestroy():void{
    this.firstObservableSubscription.unsubscribe();
  }
}

import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, DoCheck, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges,ViewChild } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.scss']
})
export class ServerElementComponent implements OnInit,
OnChanges,
DoCheck,
AfterContentInit,
AfterContentChecked,
AfterViewInit ,
AfterViewChecked,
OnDestroy{
  @Input() i:{type:string,name:string,content:string}={type:"",name:"",content:""}

  //@ViewChild('heading') header:ElementRef;
  //@ContentChild('paragraphContent') paragraph:ElementRef;


  constructor(){
    console.log("constructor called");
   }

  ngOnInit(): void {
    console.log("ngOninit called");
    //console.log("text is" +this.header.nativeElement.textContent);
  }

  ngOnChanges(changes:SimpleChanges){
    console.log("ngChanges called");
    console.log(changes)
  }

  ngDoCheck(){
    console.log("Docheck called");
  }

  ngAfterContentInit(){
    console.log("ngaftercontentinit called");
    //console.log(this.paragraph.nativeElement.textContent)
  }
  
  ngAfterContentChecked(){
    console.log("ngaftercontentchecked called");
  }

  ngAfterViewInit(){
    console.log("ngafterviewinit called");
    
  }
  
  ngAfterViewChecked(){
    console.log("ngafterviewchecked called");
  }

  ngOnDestroy(){
    console.log("ngondestroy called");
  }

}

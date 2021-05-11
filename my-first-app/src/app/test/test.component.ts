import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  username:string="";
  details:boolean=false;
  log:number[]=[];
  constructor(){
  
  }
  onToggleDetails=()=>{
    this.log.push(this.log.length + 1);
    return this.details = !this.details;
    }

  getColor=()=>{
    return this.log.length>=5?"pink":"white"
  }  
  ngOnInit(): void {
    
  }

}

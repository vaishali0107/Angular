import { Component,OnInit } from '@angular/core';
import { AccountServices} from "./account.service"
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers:[]
})
export class AppComponent implements OnInit {
  title = 'Services';
  accounts:{name:string,status:string}[]=[]

  constructor(private accountservices:AccountServices){

}
  ngOnInit(){
    this.accounts=this.accountservices.accounts;
  }


}

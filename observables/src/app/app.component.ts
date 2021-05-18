import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { CommonModule } from '@angular/common';  

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  activateUser=false;

  constructor(private userservice:UserService) {}

  ngOnInit() {
    this.userservice.activateButton.subscribe((data)=>{
      this.activateUser=data;
    })
  }
}

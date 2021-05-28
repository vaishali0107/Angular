import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.scss']
})
export class TemplateDrivenComponent implements OnInit {
  @ViewChild('f') signupForm:NgForm;
  submit=false;
  defaultOption="Advance"
  constructor() { }

  ngOnInit(): void {
  }

  userData={email:"",password:"",subs:""}

  onSubmit(){
    console.log(this.signupForm)
    this.submit=true;
    this.userData.email=this.signupForm.value.userdata.email;
    this.userData.password=this.signupForm.value.userdata.password;
    this.userData.subs=this.signupForm.value.subscription;
  }

}

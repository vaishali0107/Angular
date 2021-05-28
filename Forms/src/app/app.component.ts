import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('f') signupForm:NgForm;//ViewChild is used when you want to access the values of field even before submitting the form.

  defaultQuestion="pet";
  answer="";
  genders=["male","female"];
  gen="female"
  suggestUserName() {
    const suggestedName = 'Superuser';
    /*this.signupForm.setValue({
      dataofuser:{
        username:suggestedName,
        email:""
      },
      secret:"pet",
      QA:"",
      gender:"male"
    })*///this method is useful for setting the all form values
    this.signupForm.form.patchValue({
      dataofuser:{
        username:suggestedName
      }
    })
  }//this method is useful for setting single values

  /*onSubmit(form:NgForm){
    console.log(form.value);
  }*/
  user={username:"",email:"",secretQuestion:"",answer:'',gender:""}
  submit=false;

  onSubmit(){
    this.submit=true;
    this.user.username=this.signupForm.value.dataofuser.username;
    this.user.email=this.signupForm.value.dataofuser.email;
    this.user.secretQuestion=this.signupForm.value.secret;
    this.user.answer=this.signupForm.value.QA;
    this.user.gender=this.signupForm.value.gender

    this.signupForm.reset()
  }
}

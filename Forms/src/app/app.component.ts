import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('f') signupForm:NgForm;//ViewChild is used when you want to access the values of field even before submitting the form.

  suggestUserName() {
    const suggestedName = 'Superuser';
  }

  /*onSubmit(form:NgForm){
    console.log(form.value);
  }*/

  onSubmit(){
    console.log(this.signupForm.value);
  }
}

import { Component, OnInit } from '@angular/core';
import {  AbstractControl, FormArray, FormGroup,FormControl, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';

import { PasswordValidator } from '../shared/password.validator';
import { forbiddenNameValidator } from '../shared/user-name.validator';


@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent  implements OnInit {
  genders = ['male', 'female'];
  signupForm:FormGroup;
  
  constructor(private SignUp:FormBuilder){}

  ngOnInit(){
    this.signupForm=this.SignUp.group({
      userData:this.SignUp.group({
        username:['',[Validators.required,Validators.minLength(3),forbiddenNameValidator(/password/)]],
        email:['',[Validators.required,Validators.email],this.forbiddenEmail],
      }),
      gender:['female',Validators.required],
      hobbies:this.SignUp.array([]),
      password:['',Validators.required],
      confirmpassword:['',Validators.required]
    },{validator:PasswordValidator});

  }

  onSubmit(){
  console.log(this.signupForm);
  }

  get hobbies(){
    return this.signupForm.get('hobbies') as FormArray;
  }

  onAddHobby(){
    this.hobbies.push(this.SignUp.control('',Validators.required));
  }

  forbiddenEmail(control:AbstractControl):Observable<any>|Promise<any>{
    const promise=new Promise<any>((resolve,reject)=>{
      setTimeout(()=>{
        if(control.value=='test@test.com'){
        resolve({'emailsForbidden':true})
      }
      else{
        resolve(null);
      }
      },1000);
    })
    return promise;
  }

}

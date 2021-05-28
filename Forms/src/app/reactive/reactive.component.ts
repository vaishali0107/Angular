import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AsyncValidator, NameValidator } from './shared/name.validator';


@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.scss']
})
export class ReactiveComponent implements OnInit {
  form:FormGroup;
  submit=false;
  constructor(private signup:FormBuilder) { }

  ngOnInit(): void {
    this.form=this.signup.group({
      projectName:['',[Validators.required,NameValidator]],
      email:['',[Validators.required,Validators.email],AsyncValidator],
      status:['critical',Validators.required]
    });
  }

  get projectName(){
    return this.form.get('projectName');
  }

  get email(){
    return this.form.get('email');
  }

  data={
    'projectname':'',
    'email':'',
    'status':''
  }

  onSubmit(){
    this.submit=true;
    this.data.projectname=this.form.value.projectName;
    this.data.email=this.form.value.email;
    this.data.status=this.form.value.status;
    this.form.reset();
  }

}

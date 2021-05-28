import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";
import { Post } from './post.model';
import { PostService } from './post.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit,OnDestroy {
  loadedPosts = [];
  isLoading=false;
  error=null;
  errorsub:Subscription

  constructor(private http: HttpClient,private postService:PostService) {}

  ngOnInit() {
    this.errorsub=this.postService.error.subscribe(errormessage=>{
      this.error=errormessage;
    })
    this.isLoading=true;
    this.postService.fetchPost().subscribe(posts=>{
      this.isLoading=false;
      this.loadedPosts=posts;
    });
  }

  onCreatePost(postData:{title:"",content:""}) {
    // Send Http request
      this.postService.createPost(postData);
      
  }

  onFetchPosts() {
    // Send Http request
    this.isLoading=true;
    this.postService.fetchPost().subscribe(posts=>{
      this.isLoading=false;
      this.loadedPosts=posts;
    },errors=>{
      this.isLoading=false;
      this.error=errors.error.error;
    });;
  }

  onClearPosts() {
    // Send Http request
    this.postService.clearPost().subscribe(()=>{
      this.loadedPosts=[];
    })
  }

  onHandlingError(){
    this.error=null;
  }

  ngOnDestroy(){
    this.errorsub.unsubscribe();
  }

} 
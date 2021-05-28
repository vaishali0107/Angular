import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import {map,tap} from 'rxjs/operators';
import { Post} from "./post.model"

@Injectable({
    providedIn:'root'
})
export class PostService{
    error=new Subject<string>();
    constructor(private http:HttpClient){

    }

    createPost(postData){
        this.http.post<{name:string}>('https://angular-fa5dc-default-rtdb.firebaseio.com/posts.json',postData,
        {
            observe:'response'
        }
        )
        .subscribe(responseData=>{
            console.log(responseData);//responseData.body.name
          },
          errors=>{
              this.error.next(errors.message);
          })
    }

    fetchPost(){
        let searchParams=new HttpParams();
        searchParams=searchParams.append('print','pretty');
        searchParams=searchParams.append('custom','key')
        return this.http.get('https://angular-fa5dc-default-rtdb.firebaseio.com/posts.json',
        {
            headers:new HttpHeaders({"custom-header":'Hello'}),
            //params:new HttpParams().set('print','pretty')
            params:searchParams,
           
        }
        )
        .pipe(map((responsedata:{[key:string]:Post})=>{
          const postArray:Post[]=[];
          for(const key in responsedata){
            if(responsedata.hasOwnProperty(key)){
            postArray.push({...responsedata[key],id:key})
            }
          }
          return postArray;
        }))
        
    }

   clearPost(){
    return this.http.delete("https://angular-fa5dc-default-rtdb.firebaseio.com/posts.json",
    {
        observe:'events',
        responseType:'json'
    })
    .pipe(tap(events=>{
        console.log(events);
    }))
   }

}
import { Injectable } from '@angular/core';
//importing the client to make the request
import{HttpClient, HttpErrorResponse} from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
//import observable related code.
import { Observable,Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HttpBlogService {
public allBlogs;
public currentBlog;
public baseUrl = 'https://blogapp.edwisor.com/api/v1/blogs';
public authToken = 'MWFlZDllNTc5YzZhMTIyZjZjYWM1MWI0OWJhMmQ2ZTgwMzA5MDRhZmU2NzdmZjJlMjlmYWIxMTEwMTkzMmE1ZjdiODFlMGM3YWQ1ZGMwNzgzMGM4YWU4ZDZiMGJkYmRmNTNhMzAyNDk1YjRjZTIwN2QyNDg2MzY5OTE2NWFkZjVjNg==';
constructor(private _Http:HttpClient) { 
    console.log("blog http service is called")
  }
  //exception handler
  
  private handleError(err : HttpErrorResponse) {
    console.log("handle errors http calls");
    console.log(err.message);
    return Observable.throw(err.message);
  }

//method to return all blogs
public getAllBlogs(): any {
let myResponse = this._Http.get(this.baseUrl+'/all?authToken='+this.authToken);
  console.log(myResponse);
  return myResponse;  
}
//method to return a particular blog
public getSingleBlogInformation(currentBlogId): any{
  let myResponse = this._Http.get(this.baseUrl+'/view'+'/'+currentBlogId+'?authToken='+this.authToken);
  console.log(myResponse);
  return myResponse;
}

  public createBlog(blogData):any{
    let myResponse = this._Http.post(this.baseUrl+'/create'+'/?authToken='+this.authToken,blogData);

    return myResponse;
  }//end create blog

  public deleteBlog(blogId):any{
  
    let data={}
    let myResponse = this._Http.post(this.baseUrl+'/'+blogId+'/delete'+'?authToken='+this.authToken,data);
    return myResponse; 

  }

  public editBlog(blogId,blogData):any {
    let myResponse = this._Http.post(this.baseUrl+'/'+blogId+'/edit'+'?authToken'+this.authToken,blogData);
    return myResponse;
   }
}

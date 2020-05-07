import { Component, OnInit, OnDestroy } from '@angular/core';
import { BlogService } from '../blog.service';
import { HttpBlogService } from '../http-blog.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit , OnDestroy  {

  //declare a dummy blog variable
public allBlogs;

  constructor(public httpblogService:HttpBlogService) {
    console.log("home component constructor called");
   }
   ngOnInit(){
    console.log("home component ngOnInit is callled");
    this.allBlogs = this.httpblogService.getAllBlogs().subscribe(
      data =>{
console.log("logging data");
console.log(data);
this.allBlogs = data["data"]; 
      },
      error =>{
        console.log("some error occured")
        console.log(error.errorMessage);
      }
      
      )
    console.log(this.allBlogs);
  }
  ngOnDestroy():void {
    console.log("home component ngOnDestroy is called");
  }
}

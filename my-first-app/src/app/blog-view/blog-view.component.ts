import { Component, OnInit } from '@angular/core';
// importing route related code
import {  ActivatedRoute, Router} from  "@angular/router";
import { BlogService } from '../blog.service';
import { HttpBlogService } from '../http-blog.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css']
})
export class BlogViewComponent implements OnInit {

  //empty object

public currentBlog;
  //storing json in variable
 
  constructor(private _route: ActivatedRoute, private router: Router,public blogService:BlogService,private httpBlogService:HttpBlogService,private toastr:ToastrService ) {
    console.log("blog-view component constructor is called");
  }
    
   
  ngOnInit() {
    console.log("blog-view component ngOnInit is called");
    // getting the blogid from the route  
    let myBlogId = this._route.snapshot.paramMap.get('blogId');
    console.log(myBlogId);
    //calling the function to get the blogID out of the array
   
     this.httpBlogService.getSingleBlogInformation(myBlogId).subscribe(
      data =>{
console.log(data);
this.currentBlog = data["data"]; 
      },
      error =>{
        console.log("some error occured")
        console.log(error.errorMessage);
      }
      
      )

    }
  
    public deleteThisBlog(){
      this.httpBlogService.deleteBlog(this.currentBlog.blogId).subscribe(

        data =>{
          console.log("blog deleted");
          console.log(data);
          alert("Blog deleted Successfully");
        
        },
        error =>{
          console.log("some error occured");
          console.log(error.errorMessage);
          alert("some error occured");
        }
      )
    }  
ngOnDestroy() {
  console.log("blog-view component is destroyed");
}
}
 
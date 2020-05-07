import { Component, OnInit,ViewContainerRef } from '@angular/core';
import{HttpBlogService } from "../http-blog.service";
import {FormsModule} from '@angular/forms'
import { ActivatedRoute,Router} from '@angular/router';
import { ToastrService } from 'ngx-toastr';
//import blog http service



@Component({
  selector: 'app-blog-edit',
  templateUrl: './blog-edit.component.html',
  styleUrls: ['./blog-edit.component.css']
})
export class BlogEditComponent implements OnInit {

  public currentBlog;


  public blogTitle:string;
  public blogBody:string;
  public Description:string;
  public blogcategory:string;
  public possiblecategories=["comedy","Drama","action","Technology"];
  constructor(private httpBlogService: HttpBlogService,private _route:ActivatedRoute,private router:Router,private toastr:ToastrService,vcr:ViewContainerRef){
  }  clickMeEvent() 
    {
   this.toastr.success('success');
}

  ngOnInit(): void {
    let myBlogId = this._route.snapshot.paramMap.get('blogId');
    console.log(myBlogId);
  }
 public editThisBlog(){
    this.httpBlogService.getSingleBlogInformation(this.currentBlog).subscribe(
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
  }



import { Component, OnInit,ViewContainerRef } from '@angular/core';
import{HttpBlogService } from "../http-blog.service";
import {FormsModule} from '@angular/forms'
import { ActivatedRoute,Router} from '@angular/router';
import { ToastrService } from 'ngx-toastr';
//import blog http service


@Component({
  selector: 'app-blog-create',
  templateUrl: './blog-create.component.html',
  styleUrls: ['./blog-create.component.css']
})
export class BlogCreateComponent implements OnInit {
  currentBlog: any;
   constructor(private httpBlogService: HttpBlogService,private _route:ActivatedRoute,private router:Router,private toastr:ToastrService,vcr:ViewContainerRef){
   }
    clickMeEvent() 
     {
    this.toastr.success('success');
}
   
    public blogTitle:string;
    public blogBody:string;
    public Description:string;
    public blogcategory:string;
    public possiblecategories=["comedy","Drama","action","Technology"]

   
  ngOnInit() {
  }
  public createBlog():any{
    let blogData = {
      title: this.blogTitle,
      description:this.Description,
       blogBody:this.blogBody,
      category:this.blogcategory
    }//end of blog data
    console.log(blogData);

    this.httpBlogService.createBlog(blogData).subscribe(
      data =>{
        console.log("blog created")
        this.toastr.success('blog posted successully','success');
console.log(data);
setTimeout(()=>{
  this.router.navigate(['/blog',data.data.blogId]);
},1000)
      },
      error =>{
        console.log("some error occured")
        console.log(error.errorMessage);
      }
      )
  }

  
}
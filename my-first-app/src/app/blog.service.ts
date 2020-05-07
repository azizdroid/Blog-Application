import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  deleteBlog(blogId: any) {
    throw new Error("Method not implemented.");
  }
  public allBlogs = [
    {
      "blogId": "1",
      "lastModified": "2020-03-02T12:20:47.854Z",
      "created": "2020-03-02T12:20:47.854Z",
      "tags": ["humour", "chandler", "joey"],  
      "author": "admin",
      "category": "comedy",
      "isPublished": true,
      "views": 1,
      "bodyHtml": "<h1>THIS IS BODY</h1>",
      "title": "blog1",
      "description": "this is blog1",
    },
    {
      "blogId": "2",
      "tags": [],
      "category": "comedy",
      "views": 1,
      "bodyHtml": "this is body of blog2",
      "lastModified": "2020-03-02T12:20:47.854Z",
      "created": "2020-03-02T12:20:47.854Z",
      "author": "admin",
      "isPublished": true,
      "title": "blog2",
      "description": "this is blog",
    },
    {
      "blogId": "3",
      "lastModified": "2020-03-02T12:20:47.854Z",
      "created": "2020-03-02T12:20:47.854Z",
      "tags": [],
      "author": "sabera",
      "category": "comedy",
      "isPublished": true,
      "views": 1,
      "bodyHtml": "this is body",
      "title": "blog3",
      "description": "this is blog3",
    } 
  ]
   constructor(){
     console.log("service constructor is called");  
   }
   //method to return all the blogs
   public getAllBlogs(): any {
    return this.allBlogs
  }
  public currentBlog;
//method to return a particular blog
  public getSingleBlogInformation(currentBlogId): any{
  for(let blog of this.allBlogs) {
   if(blog.blogId == currentBlogId){
    this.currentBlog = blog;
   }
} 
 console.log(this.currentBlog);
  return this.currentBlog;
}
    }


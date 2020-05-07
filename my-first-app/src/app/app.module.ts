import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule,Route} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BlogViewComponent } from './blog-view/blog-view.component';
import { BlogCreateComponent } from './blog-create/blog-create.component';
import { BlogEditComponent } from './blog-edit/blog-edit.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { BlogService } from './blog.service';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


 import { ToastrModule } from 'ngx-toastr';

//importing forms module from angular forms
import {FormsModule} from '@angular/forms'


import {HttpBlogService } from './http-blog.service'

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BlogViewComponent,
    BlogCreateComponent,
    BlogEditComponent,
    AboutComponent, 

    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
  BrowserAnimationsModule,
  ToastrModule.forRoot(),
    RouterModule.forRoot([
{path:'home',component:HomeComponent},
{path:'about',component:AboutComponent},
{path:'',redirectTo:'Home',pathMatch:'full'},
{path:'create',component:BlogCreateComponent},
{path:'blog/:blogId',component:BlogViewComponent},
{path:'edit/:blogId',component:BlogEditComponent},
{path:'**',component:NotFoundComponent}
    ])
  ],
  providers: [BlogService,HttpBlogService,HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }

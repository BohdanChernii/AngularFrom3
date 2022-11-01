import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommentsRoutingModule } from './comments-routing.module';
import {CommentsComponent} from "./components/comments/comments.component";
import {CommentComponent} from "./components/comment/comment.component";
import {CommentService} from "./services/comment.service";
import { CommentDetailsComponent } from './components/comment-details/comment-details.component';



@NgModule({
  declarations: [
    CommentComponent,
    CommentsComponent,
    CommentDetailsComponent
  ],
  imports: [
    CommonModule,
    CommentsRoutingModule
  ],
  providers:[
    CommentService
  ]
})
export class CommentsModule { }

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PostsRoutingModule} from './posts-routing.module';
import {PostDetailsComponent} from './components/post-details/post-details.component';
import {PostServiceService} from "./services/post.service.service";
import {PostsComponent} from "./components/posts/posts.component";
import {PostComponent} from "./components/post/post.component";


@NgModule({
  declarations: [
    PostComponent,
    PostsComponent,
    PostDetailsComponent
  ],
  imports: [
    CommonModule,
    PostsRoutingModule
  ],
  providers: [
    PostServiceService
  ]
})
export class PostsModule {
}

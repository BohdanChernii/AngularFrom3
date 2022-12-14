import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PostsResolver} from "./services/resolvers/posts.resolver";
import {PostComponent} from "./components/post/post.component";
import {PostsComponent} from "./components/posts/posts.component";
import {PostDetailsComponent} from "./components/post-details/post-details.component";
import {PostResolver} from "./services/resolvers/post.resolver";

const routes: Routes = [
  {
    path: '', component: PostsComponent, resolve: {posts: PostsResolver}, children: [
      {path: ':id', component: PostDetailsComponent, resolve: {post: PostResolver}}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule {
}

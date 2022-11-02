import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CommonModule} from "@angular/common";
import {MainLayoutComponent} from "../layouts/main-layout/main-layout.component";

const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      {path: 'users', loadChildren: () => import('./modules/users/users.module').then(value => value.UsersModule)},
      {
        path: 'comments',
        loadChildren: () => import('./modules/comments/comments.module').then(value => value.CommentsModule)
      },
      {
        path: 'posts',
        loadChildren: () => import('./modules/posts/posts.module').then(value => value.PostsModule)
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}

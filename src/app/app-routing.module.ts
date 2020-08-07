import { ProfileComponent } from './profile/profile.component';
import { PostsComponent } from './posts/posts.component';
import { GithubfollowingComponent } from './githubfollowing/githubfollowing.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: "", component: GithubfollowingComponent },
  { path: "github", component: GithubfollowingComponent },
  { path: "posts", component: PostsComponent },
  { path: "github/:username", component: ProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

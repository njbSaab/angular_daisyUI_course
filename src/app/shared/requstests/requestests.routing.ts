import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostItemComponent } from './components/post-item/post-item.component';

export const routes: Routes = [
  {
    path: "",
    component: PostListComponent,
  },
  {
    path: ":id", 
    component: PostItemComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RequstestsRouting {}

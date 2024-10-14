import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostItemComponent } from './components/post-item/post-item.component';
import { RequstestsRouting } from './requestests.routing';
import { PostService } from './serivces/post.service';
import { HttpClientModule } from '@angular/common/http';
import { CommentComponent } from './components/comment/comment.component';
import { PipeModule } from '../pipe/pipe.module';

@NgModule({
  declarations: [PostListComponent,PostItemComponent, CommentComponent],
  imports: [
    CommonModule,
    RequstestsRouting, HttpClientModule, PipeModule
  ],
  exports: [PostListComponent,PostItemComponent, CommentComponent],
  providers: [PostService]
})
export class RequstestsModule { }

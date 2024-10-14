import { Component, OnInit } from '@angular/core';
import { PostService, Post } from '../../serivces/post.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.scss'
})
export class PostListComponent implements OnInit {

  public posts$?: Observable<Post[]>

  constructor(
    private postService: PostService
  ) { }

  ngOnInit(): void {
    this.posts$ = this.postService.getPosts()
  }
}

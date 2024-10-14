import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService, Post, Comment } from '../../serivces/post.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.scss']
})
export class PostItemComponent implements OnInit {
  public post?: Post;
  public comment$?: Observable<Comment[]>;

  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
  ) { }

  ngOnInit(): void {
    const postId = this.route.snapshot.paramMap.get('id');
    if (postId) {
      const postIdNum = parseInt(postId, 10);
      this.loadPost(postIdNum);

      this.comment$ = this.postService.getComments().pipe(
        map(comments => comments.filter(comment => comment.postId === postIdNum))
      );
    }
  }

  private loadPost(id: number): void {
    this.postService.getPosts().subscribe(posts => {
      this.post = posts.find(p => p.id === id);
    });
  }
}

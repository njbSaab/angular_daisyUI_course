import { Component, Input } from '@angular/core';
import { Comment } from '../../serivces/post.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent {
  @Input() comments: Comment[] = [];
}

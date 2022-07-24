import { Component, OnInit } from '@angular/core';
import { CommentsService } from '../services/comments.service';
import { Comment } from '../models/comment.model';

@Component({
  selector: 'app-comment-logic',
  templateUrl: './logic.component.html',
  styleUrls: ['./logic.component.scss'],
})
export class CommentLogicComponent implements OnInit {
  comments$: Comment[] = [];

  constructor(private commentsService: CommentsService) {}

  ngOnInit(): void {}

  getComments() {
    this.commentsService.getComments().subscribe((data) => {
      this.comments$ = data;
    });
    console.log(this.comments$);
  }

  deleteItem(index: number) {
    let itemToRemove = this.comments$[index];
    this.comments$ = this.comments$.filter((item) => item !== itemToRemove);
    this.commentsService.deleteComment(index).subscribe();
  }
}

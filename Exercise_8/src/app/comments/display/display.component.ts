import {
  Component,
  Input,
  Output,
  OnInit,
  OnChanges,
  EventEmitter,
} from '@angular/core';
import { Comment } from '../models/comment.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-comments-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss'],
})
export class CommentsDisplayComponent implements OnInit, OnChanges {
  @Input() comments$: Comment[] = [];
  @Output() emitDeleteEvent = new EventEmitter();
  deleted = false;
  constructor(private _snackBar: MatSnackBar) {}

  ngOnInit(): void {
    console.log(this.comments$);
  }

  ngOnChanges() {
    console.log(this.comments$);
  }

  deleteComment(index: number): void {
    this.emitDeleteEvent.emit(index);
    this.deleted = !this.deleted;
  }

}

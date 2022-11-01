import {Component, Input, OnInit} from '@angular/core';
import {CommentService} from "../../services/comment.service";
import {IComment} from "../../interfaces";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  @Input()
  comments: IComment[]

  constructor(private commentService: CommentService) {
  }

  ngOnInit(): void {
    this.commentService.getAll().subscribe(value => this.comments = value)
  }

}

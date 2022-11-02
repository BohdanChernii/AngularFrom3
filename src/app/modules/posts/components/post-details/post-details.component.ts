import {Component, OnInit} from '@angular/core';
import {IPost} from "../../interfaces";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
  post: IPost

  constructor(private activatedRouter:ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRouter.data.subscribe(({post})=>this.post = post)
  }

}

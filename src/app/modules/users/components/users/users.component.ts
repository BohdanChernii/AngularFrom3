import {Component, Input, OnInit} from '@angular/core';
import {IUser} from "../../interfaces";
import {UserServiceService} from "../../services/user.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: IUser[]

  constructor(private usersService: UserServiceService, private activatedRoute: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({users}) => this.users = users)
    // this.usersService.getAll().subscribe((value) => this.users = value)
  }

}

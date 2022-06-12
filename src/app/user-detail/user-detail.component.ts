import { Component, OnInit } from '@angular/core';
import { User } from '../utils/user';
import { ApiService } from '../services/api.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  user: User;

  constructor(
    private api: ApiService,
    private userService: UserService
    ) {
    this.user = userService.user;
  }

  ngOnInit() {
  }

}

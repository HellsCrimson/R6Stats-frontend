import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { UserService } from '../services/user.service';
import { User } from '../utils/user';

@Component({
  selector: 'app-overall-stats',
  templateUrl: './overall-stats.component.html',
  styleUrls: ['./overall-stats.component.css']
})
export class OverallStatsComponent implements OnInit {

  user: User;

  constructor(
    private api: ApiService,
    private userService: UserService
    ) {
    this.user = userService.user;
  }

  ngOnInit(): void {
  }

}

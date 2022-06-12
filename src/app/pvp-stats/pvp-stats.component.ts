import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { UserService } from '../services/user.service';
import { User } from '../utils/user';

@Component({
  selector: 'app-pvp-stats',
  templateUrl: './pvp-stats.component.html',
  styleUrls: ['./pvp-stats.component.css']
})
export class PvpStatsComponent implements OnInit {

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

import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { UserService } from '../services/user.service';
import { User } from '../utils/user';

@Component({
  selector: 'app-pve-stats',
  templateUrl: './pve-stats.component.html',
  styleUrls: ['./pve-stats.component.css']
})
export class PveStatsComponent implements OnInit {

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

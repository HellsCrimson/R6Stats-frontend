import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { UserService } from '../services/user.service';
import { User } from '../utils/user';

@Component({
  selector: 'app-weapon-pvp-stats',
  templateUrl: './weapon-pvp-stats.component.html',
  styleUrls: ['./weapon-pvp-stats.component.css']
})
export class WeaponPvpStatsComponent implements OnInit {

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

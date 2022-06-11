import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  user: User = {
    id: 1,
    username: "HellsCrimson",
    platform: "uplay",
    avatar: "https://ubisoft-avatars.akamaized.net/0fc0c744-b935-43fc-b860-7b34111f1473/default_tall.png",
    stats: "json data stuff"
  }

  constructor() { }

  ngOnInit(): void {
  }

}

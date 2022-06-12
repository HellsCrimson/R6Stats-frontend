import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { UserService } from '../services/user.service';
import { User } from '../utils/user';

@Component({
  selector: 'app-user-search-bar',
  templateUrl: './user-search-bar.component.html',
  styleUrls: ['./user-search-bar.component.css']
})
export class UserSearchBarComponent implements OnInit {

  defaultPlatform = 'uplay';
  user: User;

  searchForm = this.formBuilder.group({
    username: '',
    platform: ''
  });

  constructor(
    private api: ApiService,
    private userService: UserService,
    private formBuilder: FormBuilder
    ) {
      this.user = userService.user;
    }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.api.getUserInfo(this.searchForm.value).subscribe(data => {
      this.getUserInfo(data);
    })

    this.api.getUserStatsPvp(this.searchForm.value).subscribe(data => {
      this.getStatsPvp(data);
    })

    this.api.getUserStatsPve(this.searchForm.value).subscribe(data => {
      this.getStatsPve(data);
    })
  }

  getUserInfo(data: any) {
    this.user.id = data.data.id;
    this.user.username = data.data.username;
    this.user.platform = data.data.platform;
    this.user.avatar = data.data.avatar[Object.keys(data.data.avatar)[2]];
  }

  getStatsPvp(data: any) {}

  getStatsPve(data: any) {}

}

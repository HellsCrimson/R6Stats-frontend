import { Component } from '@angular/core';
import { UserService } from './services/user.service';
import { User } from './utils/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'R6Stat';

  user: User;

  constructor(private userService: UserService) {
    this.user = userService.user;
  }
}

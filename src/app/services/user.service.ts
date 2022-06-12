import { Injectable } from '@angular/core';
import { User } from '../utils/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: User;

  constructor() {
    this.user = {
      id: 0,
      username: '',
      platform: '',
      avatar: '',
      character: [],
    }
  }
}

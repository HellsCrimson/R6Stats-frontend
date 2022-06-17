import { Injectable } from '@angular/core';
import { User } from '../utils/user';
import { Stats } from '../utils/stats';
import { Operator } from '../utils/operator';

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
      generalStatsPvp: new Stats(
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        '0%',
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        []
      ),
      generalStatsPve: new Stats(
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        '0%',
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        []
      ),
    }
  }
}

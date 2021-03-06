import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { UserService } from '../services/user.service';
import { Operator } from '../utils/operator';
import { Stats } from '../utils/stats';
import { User } from '../utils/user';
import { Ability } from '../utils/ability';
import { AbilityStats } from '../utils/ability_stats';
import { GunCategory } from '../utils/guns/gun_category';
import { Weapon } from '../utils/guns/weapon';

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
    if (this.searchForm.value.username != '' && this.searchForm.value.platform != '') {
      this.api.getUserInfo(this.searchForm.value).subscribe(data => {
        this.getUserInfo(data);
      })

      this.api.getUserStatsPvp(this.searchForm.value).subscribe(data => {
        this.getStats(data, this.user.generalStatsPvp);
        this.getOperatorInfo(data, this.user.generalStatsPvp.character);
        this.getWeaponInfo(data, this.user.generalStatsPvp.guns);
        this.getQueuesInfo();
        this.getModesInfo();
      })

      this.api.getUserStatsPve(this.searchForm.value).subscribe(data => {
        this.getStats(data, this.user.generalStatsPve);
        this.getOperatorInfo(data, this.user.generalStatsPve.character);
        this.getWeaponInfo(data, this.user.generalStatsPve.guns);
        this.getQueuesInfo();
        this.getModesInfo();
      })
    }
  }

  getUserInfo(data: any) {
    this.user.id = data.data.id;
    this.user.username = data.data.username;
    this.user.platform = data.data.platform;
    this.user.avatar = data.data.avatar[Object.keys(data.data.avatar)[2]];
  }

  getStats(data: any, stats: Stats) {
    stats.bulletsFired = data.data.general.bulletsFired;
    stats.bulletsConnected = data.data.general.bulletsConnected;
    stats.kills = data.data.general.kills;
    stats.deaths = data.data.general.deaths;
    stats.kd = data.data.general.kd;
    stats.assists = data.data.general.assists;
    stats.headshots = data.data.general.headshots;
    stats.meleeKills = data.data.general.meleeKills;
    stats.penetrationKills = data.data.general.penetrationKills;
    stats.blindKills = data.data.general.blindKills;
    stats.dbno = data.data.general.dbno;
    stats.dbnoAssists = data.data.general.dbnoAssists;
    stats.revives = data.data.general.revives;
    stats.wins = data.data.general.wins;
    stats.losses = data.data.general.losses;
    stats.winRate = data.data.general.winRate;
    stats.matches = data.data.general.matches;
    stats.playtime = data.data.general.playtime;
    stats.gadgetsDestroyed = data.data.general.gadgetsDestroyed;
    stats.rappelBreaches = data.data.general.rappelBreaches;
    stats.barricadesDeployed = data.data.general.barricadesDeployed;
    stats.reinforcementsDeployed = data.data.general.reinforcementsDeployed;
    stats.suicides = data.data.general.suicides;
    stats.distanceTravelled = data.data.general.distanceTravelled;
    stats.xp = data.data.general.xp;
  }

  getOperatorInfo(data: any, characters: Operator[]) {
    data = data.data.operators;
    var operatorsName = [];
    for (var operator in data) {
      operatorsName.push(operator);
    }
    for (var index = 0; index < operatorsName.length; index++) {
      var curOperator = data[operatorsName[index]];
      var character = new Operator(
        curOperator.name,
        curOperator.role,
        curOperator.unit,
        curOperator.icon,
        curOperator.kills,
        curOperator.deaths,
        curOperator.kd,
        curOperator.wins,
        curOperator.losses,
        curOperator.winRate,
        curOperator.matches,
        curOperator.headshots,
        curOperator.meleeKills,
        curOperator.dbno,
        curOperator.xp,
        curOperator.playtime,
        this.getAbility(curOperator.uniqueAbility),
      );
      characters.push(character);
    }
  }

  getAbility(ability: any) {
    let newAbility = new Ability('', '', []);

    if (ability != null)
    {
      newAbility.name = ability.name;
      newAbility.icon = ability.icon;

      for (var index in ability.stats)
      {
        newAbility.stats.push(new AbilityStats(ability.stats[index].name, ability.stats[index].value))
      }
    }
    
    return newAbility;
  }

  getWeaponInfo(data: any, guns: GunCategory[]) {
    data = data.data.weapons;
    for (var category in data)
    {
      let newGunCategory = new GunCategory();
      newGunCategory.name = ((data[category])['general']).name;
      newGunCategory.kills = ((data[category])['general']).kills;
      newGunCategory.deaths = ((data[category])['general']).deaths;
      newGunCategory.kd = ((data[category])['general']).kd;
      newGunCategory.headshots = ((data[category])['general']).headshots;
      newGunCategory.bulletsFired = ((data[category])['general']).bulletsFired;
      newGunCategory.bulletsConnected = ((data[category])['general']).bulletsConnected;
      newGunCategory.timesChosen = ((data[category])['general']).timesChosen;

      for (var weapon in (data[category])['list'])
      {
        let gun = new Weapon();
        gun.name = (((data[category])['list'])[weapon]).name;
        gun.icon = (((data[category])['list'])[weapon]).icon;
        gun.kills = (((data[category])['list'])[weapon]).kills;
        gun.deaths = (((data[category])['list'])[weapon]).deaths;
        gun.kd = (((data[category])['list'])[weapon]).kd;
        gun.headshots = (((data[category])['list'])[weapon]).headshots;
        gun.bulletsFired = (((data[category])['list'])[weapon]).bulletsFired;
        gun.bulletsConnected = (((data[category])['list'])[weapon]).bulletsConnected;
        gun.timesChosen = (((data[category])['list'])[weapon]).timesChosen;
        
        newGunCategory.guns.push(gun);
      }

      guns.push(newGunCategory);
    }
  }

  getQueuesInfo() {
  }

  getModesInfo() {
  }
}

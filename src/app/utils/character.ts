import { Ability } from './ability';

export interface Character {
    name: string;
    role: string;
    unit: string;
    icon: string;
    kills: number;
    deaths: number;
    kd: number;
    wins: number;
    losses: number;
    winRate: string; // get as %
    matches: number;
    headshots: number;
    meleeKills: number;
    dbno: number;
    xp: number;
    playtime: number;
    uniqueAbility: Ability;
}

export class Character implements Character {
    constructor(
        name: string,
        role: string,
        unit: string,
        icon: string,
        kills: number,
        deaths: number,
        kd: number,
        wins: number,
        losses: number,
        winRate: string,
        matches: number,
        headshots: number,
        meleeKills: number,
        dbno: number,
        xp: number,
        playtime: number,
        uniqueAbility: Ability
    ) {
        this.name = name;
        this.role = role;
        this.unit = unit;
        this.icon = icon;
        this.kills = kills;
        this.deaths = deaths;
        this.kd = kd;
        this.wins = wins;
        this.losses = losses;
        this.winRate = winRate;
        this.matches = matches;
        this.headshots = headshots;
        this.meleeKills = meleeKills;
        this.dbno = dbno;
        this.xp = xp;
        this.playtime = playtime;
        this.uniqueAbility = uniqueAbility;
    }
}
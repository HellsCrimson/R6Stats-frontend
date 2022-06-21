import { Operator } from "./operator";
import { GunCategory } from "./guns/gun_category";

export interface Stats {
    bulletsFired: number;
    bulletsConnected: number;
    kills: number;
    deaths: number;
    kd: number; // get as float
    assists: number;
    headshots: number;
    meleeKills: number;
    penetrationKills: number;
    blindKills: number;
    dbno: number;
    dbnoAssists: number;
    revives: number;
    wins: number;
    losses: number;
    winRate: string; // get as %
    matches: number;
    playtime: number;
    gadgetsDestroyed: number;
    rappelBreaches: number;
    barricadesDeployed: number;
    reinforcementsDeployed: number;
    suicides: number;
    distanceTravelled: number;
    xp: number;
    character: Operator[];
    guns: GunCategory[];
}

export class Stats implements Stats {
    constructor() {
        this.bulletsFired = 0;
        this.bulletsConnected = 0;
        this.kills = 0;
        this.deaths = 0;
        this.kd = 0;
        this.assists = 0;
        this.headshots = 0;
        this.meleeKills = 0;
        this.penetrationKills = 0;
        this.blindKills = 0;
        this.dbno = 0;
        this.dbnoAssists = 0;
        this.revives = 0;
        this.wins = 0;
        this.losses = 0;
        this.winRate = "";
        this.matches = 0;
        this.playtime = 0;
        this.gadgetsDestroyed = 0;
        this.rappelBreaches = 0;
        this.barricadesDeployed = 0;
        this.reinforcementsDeployed = 0;
        this.suicides = 0;
        this.distanceTravelled = 0;
        this.xp = 0;
        this.character = [];
        this.guns = [];
    }
}
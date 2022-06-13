import { Character } from "./character";

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
    character: Character[];
}

export class Stats implements Stats {
    constructor(
        bulletsFired: number,
        bulletsConnected: number,
        kills: number,
        deaths: number,
        kd: number,
        assists: number,
        headshots: number,
        meleeKills: number,
        penetrationKills: number,
        blindKills: number,
        dbno: number,
        dbnoAssists: number,
        revives: number,
        wins: number,
        losses: number,
        winRate: string,
        matches: number,
        playtime: number,
        gadgetsDestroyed: number,
        rappelBreaches: number,
        barricadesDeployed: number,
        reinforcementsDeployed: number,
        suicides: number,
        distanceTravelled: number,
        xp: number,
        character: Character[],
    ) {
        this.bulletsFired = bulletsFired;
        this.bulletsConnected = bulletsConnected;
        this.kills = kills;
        this.deaths = deaths;
        this.kd = kd;
        this.assists = assists;
        this.headshots = headshots;
        this.meleeKills = meleeKills;
        this.penetrationKills = penetrationKills;
        this.blindKills = blindKills;
        this.dbno = dbno;
        this.dbnoAssists = dbnoAssists;
        this.revives = revives;
        this.wins = wins;
        this.losses = losses;
        this.winRate = winRate;
        this.matches = matches;
        this.playtime = playtime;
        this.gadgetsDestroyed = gadgetsDestroyed;
        this.rappelBreaches = rappelBreaches;
        this.barricadesDeployed = barricadesDeployed;
        this.reinforcementsDeployed = reinforcementsDeployed;
        this.suicides = suicides;
        this.distanceTravelled = distanceTravelled;
        this.xp = xp;
        this.character = character;
    }
}
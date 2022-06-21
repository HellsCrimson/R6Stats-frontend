export interface Weapon {
    name: string;
    icon: string;
    kills: number;
    deaths: number;
    kd: number;
    headshots: number;
    bulletsFired: number;
    bulletsConnected: number;
    timesChosen: number;
}

export class Weapon implements Weapon {
    constructor() {
        this.name = "";
        this.icon = "";
        this.kills = 0;
        this.deaths = 0;
        this.kd = 0;
        this.headshots = 0;
        this.bulletsFired = 0;
        this.bulletsConnected = 0;
        this.timesChosen = 0;
    }
}
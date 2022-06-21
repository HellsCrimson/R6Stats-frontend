import { Weapon } from "./weapon";

export interface GunCategory {
    name: string;
    kills: number;
    deaths: number;
    kd: number;
    headshots: number;
    bulletsFired: number;
    bulletsConnected: number;
    timesChosen: number;
    guns: Weapon[];
}

export class GunCategory implements GunCategory {
    constructor() {
        this.name = "";
        this.kills = 0;
        this.deaths = 0;
        this.kd = 0;
        this.headshots = 0;
        this.bulletsFired = 0;
        this.bulletsConnected = 0;
        this.timesChosen = 0;
        this.guns = [];
    }
}
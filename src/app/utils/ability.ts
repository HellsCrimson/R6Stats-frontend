import { AbilityStats } from "./ability_stats";

export interface Ability {
    name: string;
    icon: string;
    stats: AbilityStats[];
}

export class Ability implements Ability {
    constructor(
        name: string,
        icon: string,
        stats: AbilityStats[]
    ) {
        this.name = name;
        this.icon = icon;
        this.stats = stats;
    }
}
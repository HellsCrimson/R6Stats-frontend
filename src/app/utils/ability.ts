import { AbilityStats } from "./ability_stats";

export interface Ability {
    name: string;
    icon: string;
    stats: AbilityStats[];
}
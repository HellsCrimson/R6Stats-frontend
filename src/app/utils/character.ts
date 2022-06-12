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
    winRate: number; // get as %
    matches: number;
    headshots: number;
    meleeKills: number;
    dbno: number;
    xp: number;
    playtime: number;
    uniqueAbility: Ability;
}
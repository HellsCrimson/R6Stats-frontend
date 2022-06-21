export interface AbilityStats {
    name: string;
    value: number;
}

export class AbilityStats implements AbilityStats {
    constructor(name: string, value: number) {
        this.name = name;
        this.value = value;
    }
}
import { Stats } from "./stats";

export interface User {
    id: number;
    username: string;
    platform: string;
    avatar: string;
    generalStatsPvp: Stats;
    generalStatsPve: Stats;
  }
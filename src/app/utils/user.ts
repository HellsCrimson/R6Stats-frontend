import { Character } from "./character";

export interface User {
    id: number;
    username: string;
    platform: string;
    avatar: string;
    character: Character[];
  }
import { Stats } from "./config";
export declare class adventurer {
    level: number;
    species: string;
    name: string;
    stats: Stats;
    element: string;
    type: string;
    moves: IMove[];
    constructor(level: number, species: string, name: string, type: string, move: string);
}
export interface IMove {
    id: string;
    name: string;
    power: number;
    accuracy: number;
    description: string;
    type: string;
}

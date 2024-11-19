import type { Direction } from "./Direction";
import type { Position } from "./Position";

export interface Command {
    operation(pos: Position, dir: Direction): void;
}
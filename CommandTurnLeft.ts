import type { Command } from "./Command";
import type { Direction } from "./Direction";
import { Position } from "./Position";

export class CommandTurnLeft implements Command {
    operation(pos: Position, dir: Direction): void {
        dir.turnLeft();
    }
}
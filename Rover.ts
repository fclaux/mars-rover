import { type Direction, DirectionValue } from "./Direction";
import type { Position } from "./Position";
import type { Command } from "./Command";

export class Rover {
    constructor (
        private position: Position,
        private direction: Direction
    ) {}

    execute(command: Command) {
        command.operation(this.position, this.direction);
    }

    printInformations() {
        console.log(`Position (${this.position.getX()},${this.position.getY()}), facing (${DirectionValue[this.direction.value]})`);
    }
}
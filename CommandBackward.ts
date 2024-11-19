import type { Command } from "./Command";
import { type Direction, DirectionValue } from "./Direction";
import { Position } from "./Position";

export class CommandBackward implements Command {
    operation(pos: Position, dir: Direction): void {
        switch (dir.value) {
            case DirectionValue.North:
                return pos.setY(pos.getY() - 1);
            case DirectionValue.South:
                return pos.setY(pos.getY() + 1);
            case DirectionValue.East:
                return pos.setX(pos.getX() - 1);
            case DirectionValue.West:
                return pos.setX(pos.getX() + 1);
        }
    }
}
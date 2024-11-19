import type { Command } from "./Command";
import { Position } from "./Position";
import { Rover } from "./Rover";
import { Direction, DirectionValue } from "./Direction";
import { CommandBackward } from "./CommandBackward";
import { CommandForward } from "./CommandForward";
import { CommandTurnLeft } from "./CommandTurnLeft";
import { CommandTurnRight } from "./CommandTurnRight";

const params = prompt("Rentre vos commandes (f,b,l,r) : ");
const rover = new Rover(
    new Position(0, 0),
    new Direction(DirectionValue.North)
);

rover.printInformations();

const mapping = {
    f: new CommandForward(),
    b: new CommandBackward(),
    l: new CommandTurnLeft(),
    r: new CommandTurnRight(),
} as const;

const commands: Array<Command> = params!.split("").map((input) => mapping[input as keyof typeof mapping]);
for (const command of commands) {
    rover.execute(command);
    rover.printInformations();
}

rover.printInformations();

export enum DirectionValue {
    North,
    South,
    East,
    West
}

export class Direction {
    value: DirectionValue;

    constructor (value: DirectionValue) {
        this.value = value;
    }

    turnRight(): void {
        switch (this.value) {
            case DirectionValue.North:
                this.value = DirectionValue.East;
                break;
            case DirectionValue.South:
                this.value = DirectionValue.West;
                break;
            case DirectionValue.East:
                this.value = DirectionValue.South;
                break;
            case DirectionValue.West:
                this.value = DirectionValue.North;
                break;
        }
    }

    turnLeft(): void {
        switch (this.value) {
            case DirectionValue.North:
                this.value = DirectionValue.West;
                break;
            case DirectionValue.South:
                this.value = DirectionValue.East;
                break;
            case DirectionValue.East:
                this.value = DirectionValue.North;
                break;
            case DirectionValue.West:
                this.value = DirectionValue.South;
                break;
        }
    }
}

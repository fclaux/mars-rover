export class Position {    
    constructor(
        private x: number,
        private y: number
    ) {}

    getX () {
        return this.x;
    }

    getY () {
        return this.y;
    }

    setX (x: number) {
        this.x = x;
    }

    setY (y: number) {
        this.y = y;
    }
}

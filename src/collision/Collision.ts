import {IShape} from "../shapes/AbstractShape";

export class Collision {
    readonly shapeA: IShape;
    readonly shapeB: IShape;

    constructor(shapeA: IShape, shapeB: IShape) {
        this.shapeA = shapeA;
        this.shapeB = shapeB;
    }
}

import {IShape} from "../shapes/AbstractShape";

export class ShapeProjection {
    readonly minX: number;
    readonly maxX: number;
    readonly minY: number;
    readonly maxY: number;
    readonly shape: IShape;

    constructor(shape: IShape) {
        this.shape = shape;
        this.minX = Number.POSITIVE_INFINITY;
        this.maxX = Number.NEGATIVE_INFINITY;
        this.minY = Number.POSITIVE_INFINITY;
        this.maxY = Number.NEGATIVE_INFINITY;

        for (const point of shape.getProjectionPoints()) {
            if (point.x < this.minX) {
                this.minX = point.x;
            }
            if (point.x > this.maxX) {
                this.maxX = point.x;
            }
            if (point.y < this.minY) {
                this.minY = point.y;
            }
            if (point.y > this.maxY) {
                this.maxY = point.y;
            }
        }
    }

    get lengthX() {
        return this.maxX - this.minX;
    }

    get lengthY() {
        return this.maxY - this.minY;
    }
}

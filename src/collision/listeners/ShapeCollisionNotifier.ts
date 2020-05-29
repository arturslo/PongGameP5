import {Collision} from "../Collision";
import {ICollisionsListener} from "../ICollisionsListener";
import {IShape} from "../../shapes/AbstractShape";

export class ShapeCollisionNotifier implements ICollisionsListener {
    private _shapes: IShape[];

    constructor() {
        this._shapes = [];
    }

    addListener(shape: IShape) {
        this._shapes.push(shape);
    }

    onCollisions(collisions: Collision[]): void {
        for (const collision of collisions) {
            for (const shape of this._shapes) {
                if (shape === collision.shapeA) {
                    collision.shapeA.onCollision(collision.shapeB);
                }
                if (shape === collision.shapeB) {
                    collision.shapeB.onCollision(collision.shapeA);
                }
            }
        }
    }
}

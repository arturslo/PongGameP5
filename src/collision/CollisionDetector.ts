import {Collision} from "./Collision";
import {ICollisionsListener} from "./ICollisionsListener";
import {ShapeProjection} from "./ShapeProjection";
import {IShape} from "../shapes/AbstractShape";

export class CollisionDetector {
    private _listeners: ICollisionsListener[];

    constructor() {
        this._listeners = [];
    }

    addListener(listener: ICollisionsListener) {
        this._listeners.push(listener);
    }

    detect(shapes: IShape[]) {
        const shapeProjections: ShapeProjection[] = [];
        for (const shape of shapes) {
            shapeProjections.push(new ShapeProjection(shape));
        }

        const collisions: Collision[] = [];
        for (let i = 0; i < shapeProjections.length; i++) {
            for (let i2 = i + 1; i2 < shapeProjections.length; i2++) {
                let projectionA = shapeProjections[i];
                let projectionB = shapeProjections[i2];

                let xCollision = false;
                let yCollision = false;

                if (projectionB.lengthX > projectionA.lengthX) {
                    [projectionA, projectionB] = [projectionB, projectionA];
                }

                if (
                    projectionB.minX >= projectionA.minX && projectionB.minX <= projectionA.maxX
                    || projectionB.maxX >= projectionA.minX && projectionB.maxX <= projectionA.maxX
                ) {
                    xCollision = true;
                }

                if (projectionB.lengthY > projectionA.lengthY) {
                    [projectionA, projectionB] = [projectionB, projectionA];
                }

                if (
                    projectionB.minY >= projectionA.minY && projectionB.minY <= projectionA.maxY
                    || projectionB.maxY >= projectionA.minY && projectionB.maxY <= projectionA.maxY
                ) {
                    yCollision = true;
                }

                if (xCollision && yCollision) {
                    collisions.push(new Collision(projectionA.shape, projectionB.shape));
                }
            }
        }

        if (collisions.length > 0) {
            for (const listener of this._listeners) {
                listener.onCollisions(collisions);
            }
        }
    }
}

import p5 from "p5";
import {Point, RGB} from "./shapePartsLib";

export interface IDrawable {
    draw: (p: p5) => void;
}

export interface ICollisionHandler {
    onCollision: (shape: IShape) => void;
}

export interface IProjectable {
    getProjectionPoints(): Point[];
}

export interface ICenterPoint {
    centerPoint: Point;
}

export interface IShape extends IDrawable, IProjectable, ICollisionHandler, ICenterPoint {
}

export abstract class AbstractShape implements IShape {
    abstract readonly centerPoint: Point;

    abstract draw(p: p5): void;

    abstract getProjectionPoints(): Point[];

    onCollision(shape: IShape): void {
        const self = (this as any);
        const originalColor = self._fillColor as RGB;
        const collisionColor = new RGB(255, 0, 0);

        if (originalColor.isSameColor(collisionColor)) {
            return;
        }

        self._fillColor = collisionColor;

        const id = setTimeout(() => {
            clearTimeout(id);
            self._fillColor = originalColor;
        }, 200)
    }
}

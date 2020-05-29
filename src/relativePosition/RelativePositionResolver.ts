import {Canvas} from "../gameShapes/Canvas";
import {IShape} from "../shapes/AbstractShape";

export class RelativePositionResolver {
    private _canvas: Canvas;

    constructor(canvas: Canvas) {
        this._canvas = canvas;
    }

    top(shape: IShape) {
        if (shape.centerPoint.y < this._canvas.dimensions.height / 2) {
            return true;
        }

        return false;
    }

    bottom(shape: IShape) {
        if (shape.centerPoint.y > this._canvas.dimensions.height / 2) {
            return true;
        }

        return false;
    }

    left(shape: IShape) {
        if (shape.centerPoint.x < this._canvas.dimensions.width / 2) {
            return true;
        }

        return false;
    }

    right(shape: IShape) {
        if (shape.centerPoint.x < this._canvas.dimensions.width / 2) {
            return true;
        }

        return false;
    }
}

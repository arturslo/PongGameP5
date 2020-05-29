import {Rectangle} from "../shapes/Rectangle";
import {IResettable} from "./IResettable";
import {Point} from "../shapes/shapePartsLib";
import {IPaddle} from "./IPaddle";

export enum PaddleSide {
    left = "left",
    right = "right",
}

export class Paddle extends Rectangle implements IResettable, IPaddle {
    static readonly BASE_SPEED = 3;
    private _originalCenterPoint: Point;
    private _ySpeed: number;
    readonly side: PaddleSide;

    constructor(x: number, y: number, width: number, height: number, side: PaddleSide) {
        super(x, y, width, height);
        this._originalCenterPoint = new Point(x, y);
        this._ySpeed = 0;
        this.side = side;
    }

    reset(): void {
        this.centerPoint.x = this._originalCenterPoint.x;
        this.centerPoint.y = this._originalCenterPoint.y;
    }

    update() {
        this.centerPoint.y += this._ySpeed;
        this.stop();
    }

    stop() {
        this._ySpeed = 0;
    }

    moveUp() {
        this._ySpeed = -Paddle.BASE_SPEED;
    }

    moveDown() {
        this._ySpeed = Paddle.BASE_SPEED;
    }
}

import {Circle} from "../shapes/Circle";
import {Point} from "../shapes/shapePartsLib";
import {IResettable} from "./IResettable";
import {p} from "../game/setup/processing";
import {Utilities} from "../utilities/Utilities";

export class Ball extends Circle implements IResettable{
    static readonly BASE_SPEED = 5;
    private _xSpeed: number;
    private _ySpeed: number;
    private _originalCenterPoint: Point;

    constructor(x: number, y: number, diameter: number) {
        super(x, y, diameter);
        this._originalCenterPoint = new Point(x, y);
        this._xSpeed = 0;
        this._ySpeed = 0;
        this.randomDirection();
    }

    set ySpeed(ySpeed: number) {
        this._ySpeed = ySpeed;
    }

    setDirection(deg: number) {
        p.angleMode(p.DEGREES);
        this._xSpeed = Ball.BASE_SPEED * p.cos(deg);
        this._ySpeed = Ball.BASE_SPEED * p.sin(deg);
    }

    private randomStartingAngle() {
        const angles = [
            0, 30, 45, 60, 120, 135, 150,
            180, 210, 225, 240,
            300, 315, 330
        ];
        Utilities.shuffle(angles);
        const angle = angles[0];

        return angle;
    }

    private randomDirection() {
        p.angleMode(p.DEGREES);
        const angle = this.randomStartingAngle();
        this.setDirection(angle);
    }

    update() {
        this.centerPoint.x += this._xSpeed;
        this.centerPoint.y += this._ySpeed;
    }

    reset(): void {
        this.randomDirection();
        this.centerPoint.x = this._originalCenterPoint.x;
        this.centerPoint.y = this._originalCenterPoint.y;
    }
}

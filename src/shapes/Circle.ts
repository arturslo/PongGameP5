import p5 from "p5";
import {Point, RGB} from "./shapePartsLib";
import {AbstractShape} from "./AbstractShape";

export class Circle extends AbstractShape {
    readonly centerPoint: Point;
    readonly diameter: number;
    private _fillColor: RGB;

    constructor(x: number, y: number, diameter: number) {
        super();
        this.centerPoint = new Point(x, y);
        this.diameter = diameter;
        this._fillColor = new RGB(255, 255, 255);
    }

    get radius() {
        return this.diameter / 2;
    }

    set fillColor(color: RGB) {
        this._fillColor = color;
    }

    getProjectionPoints() {
        const left = new Point(
            this.centerPoint.x - this.radius,
            this.centerPoint.y
        );
        const right = new Point(
            this.centerPoint.x + this.radius,
            this.centerPoint.y
        );
        const top = new Point(
            this.centerPoint.x,
            this.centerPoint.y - this.radius
        );
        const bottom = new Point(
            this.centerPoint.x,
            this.centerPoint.y + this.radius
        );

        return [left, right, top, bottom];
    }

    draw(p: p5): void {
        p.fill(this._fillColor.getValues());
        p.noStroke();
        p.circle(this.centerPoint.x, this.centerPoint.y, this.diameter);
    }
}

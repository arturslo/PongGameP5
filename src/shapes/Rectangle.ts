import p5 from "p5";
import {Dimensions, Point, RGB} from "./shapePartsLib";
import {AbstractShape} from "./AbstractShape";

export class Rectangle extends AbstractShape {
    readonly centerPoint: Point;
    readonly dimensions: Dimensions;
    private _fillColor: RGB;

    constructor(x: number, y: number, width: number, height: number) {
        super();
        this.centerPoint = new Point(x, y);
        this.dimensions = new Dimensions(width, height);

        this._fillColor = new RGB(255, 255, 255);
    }

    set fillColor(color: RGB) {
        this._fillColor = color;
    }

    getProjectionPoints() {
        const leftUpperCorner = new Point(
            this.centerPoint.x - this.dimensions.width / 2,
            this.centerPoint.y - this.dimensions.height / 2,
        );
        const rightUpperCorner = new Point(
            this.centerPoint.x + this.dimensions.width / 2,
            this.centerPoint.y - this.dimensions.height / 2,
        );
        const leftBottomCorner = new Point(
            this.centerPoint.x - this.dimensions.width / 2,
            this.centerPoint.y + this.dimensions.height / 2,
        );
        const rightBottomCorner = new Point(
            this.centerPoint.x + this.dimensions.width / 2,
            this.centerPoint.y + this.dimensions.height / 2,
        );

        return [leftUpperCorner, rightUpperCorner, leftBottomCorner, rightBottomCorner];
    }

    draw(p: p5): void {
        p.rectMode(p.CENTER);
        p.fill(this._fillColor.getValues());
        p.noStroke();
        p.rect(this.centerPoint.x, this.centerPoint.y, this.dimensions.width, this.dimensions.height);
    }
}

import p5 from "p5";
import {Dimensions, RGB} from "../shapes/shapePartsLib";
import {IDrawable} from "../shapes/AbstractShape";

export class Axis implements IDrawable {
    private _dimensions: Dimensions;
    private _strokeColor: RGB;

    constructor(width: number, height: number) {
        this._dimensions = new Dimensions(width, height);
        this._strokeColor = new RGB(255, 255, 255);
    }

    set strokeColor(color: RGB) {
        this._strokeColor = color;
    }

    draw(p: p5): void {
        p.stroke(this._strokeColor.getValues());
        p.strokeWeight(8);
        p.line(0, 0, this._dimensions.width, 0);
        p.line(0, 0, 0, this._dimensions.height);
    }
}

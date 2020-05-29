import {IDrawable} from "../shapes/AbstractShape";
import {Point, RGB} from "../shapes/shapePartsLib";
import p5 from "p5";

export class ScoreCounter implements IDrawable {
    private _position: Point;
    private _text: string;
    private _textSize: number;
    private _fillColor: RGB;

    constructor(x: number, y: number, score: number) {
        this._position = new Point(x, y);
        this._text = "";
        this.setScore(score);
        this._textSize = 32;
        this._fillColor = new RGB(255, 255, 255);
    }

    setScore(score: number) {
        this._text = score.toString();
    }

    set fillColor(color: RGB) {
        this._fillColor = color;
    }

    draw(p: p5) {
        p.textSize(this._textSize);
        p.textAlign(p.CENTER, p.CENTER);
        p.fill(this._fillColor.getValues());
        p.noStroke();
        p.text(this._text, this._position.x, this._position.y);
    }
}

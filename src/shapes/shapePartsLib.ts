export class Dimensions {
    readonly width: number;
    readonly height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }
}

export class RGB {
    private _r: number;
    private _g: number;
    private _b: number;

    constructor(r: number, g: number, b: number) {
        this._r = r;
        this._g = g;
        this._b = b;
    }

    getValues(): [number, number, number] {
        return [this._r, this._g, this._b];
    }

    isSameColor(otherColor: RGB) {
        const otherValues = otherColor.getValues();
        const values = this.getValues();
        for (let i = 0; i < values.length; i++) {
            if (values[i] !== otherValues[i]) {
                return false;
            }
        }

        return true;
    }
}

export class Point {
    private _x: number;
    private _y: number;

    constructor(x: number, y: number) {
        this._x = x;
        this._y = y;
    }

    set x(x: number) {
        this._x = x;
    }

    get x() {
        return this._x;
    }

    set y(y: number) {
        this._y = y;
    }

    get y() {
        return this._y;
    }
}

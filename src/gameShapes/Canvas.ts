import {Dimensions} from "../shapes/shapePartsLib";

export class Canvas {
    readonly dimensions: Dimensions;

    constructor(width: number, height: number) {
        this.dimensions = new Dimensions(width, height);
    }
}

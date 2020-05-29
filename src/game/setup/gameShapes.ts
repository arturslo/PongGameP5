import {Canvas} from "../../gameShapes/Canvas";
import {Axis} from "../../gameShapes/Axis";
import {RGB} from "../../shapes/shapePartsLib";

export const canvas = new Canvas(800, 600);
export const axis = new Axis(canvas.dimensions.width, canvas.dimensions.height);
axis.strokeColor = new RGB(138, 43, 226);
export const backgroundColor = new RGB(0, 0, 0);

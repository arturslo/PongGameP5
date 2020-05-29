import {RGB} from "../../shapes/shapePartsLib";
import {Border} from "../../gameplayObjects/Border";
import {canvas} from "./gameShapes";


export const borderColor = new RGB(200, 200, 200);
export const topBottomBorderHeight = 20;
export const topBorder = new Border(
    canvas.dimensions.width / 2,
    topBottomBorderHeight / 2,
    canvas.dimensions.width,
    topBottomBorderHeight
);
topBorder.fillColor = borderColor;
export const bottomBorder = new Border(
    canvas.dimensions.width / 2,
    canvas.dimensions.height - topBottomBorderHeight / 2,
    canvas.dimensions.width,
    topBottomBorderHeight
);
bottomBorder.fillColor = borderColor;

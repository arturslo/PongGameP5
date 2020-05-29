import {RGB} from "../../shapes/shapePartsLib";
import {canvas} from "./gameShapes";
import {topBottomBorderHeight} from "./borders";
import {Net} from "../../gameplayObjects/Net";

const additionalOffset = 1;
export const netColor = new RGB(100, 100, 100);
export const leftRightNetWidth = 20;
export const leftNet = new Net(
    leftRightNetWidth / 2,
    canvas.dimensions.height / 2,
    leftRightNetWidth,
    canvas.dimensions.height - 2 * topBottomBorderHeight - additionalOffset
);
leftNet.fillColor = netColor;
export const rightNet = new Net(
    canvas.dimensions.width - leftRightNetWidth / 2,
    canvas.dimensions.height / 2,
    leftRightNetWidth,
    canvas.dimensions.height - 2 * topBottomBorderHeight - additionalOffset
);
rightNet.fillColor = netColor;

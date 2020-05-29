import {RGB} from "../../shapes/shapePartsLib";
import {Ball} from "../../gameplayObjects/Ball";
import {canvas} from "./gameShapes";

export const ballColor = new RGB(255, 255, 255);
export const ballDiameter = 20;
export const ball = new Ball(
    canvas.dimensions.width / 2,
    canvas.dimensions.height / 2,
    ballDiameter
);
ball.fillColor = ballColor;

import {RGB} from "../../shapes/shapePartsLib";
import {leftRightNetWidth} from "./nets";
import {canvas} from "./gameShapes";
import {Paddle, PaddleSide} from "../../gameplayObjects/Paddle";

export const paddleColor = new RGB(150, 150, 150);
export const paddleHeight = 90;
export const paddleWidth = 20;
const additionalOffset = 1;
export const paddleOffsetFromSide = leftRightNetWidth + paddleWidth / 2 + additionalOffset;

export const leftPaddle = new Paddle(
    paddleOffsetFromSide,
    canvas.dimensions.height / 2,
    paddleWidth,
    paddleHeight,
    PaddleSide.left
);
leftPaddle.fillColor = paddleColor;

export const rightPaddle = new Paddle(
    canvas.dimensions.width - paddleOffsetFromSide,
    canvas.dimensions.height / 2,
    paddleWidth,
    paddleHeight,
    PaddleSide.right
);
rightPaddle.fillColor = paddleColor;

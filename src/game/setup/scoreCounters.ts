import {canvas} from "./gameShapes";
import {ScoreCounter} from "../../gameShapes/ScoreCounter";

const xOffset1 = canvas.dimensions.width / 6;
const xOffset2 = canvas.dimensions.width - canvas.dimensions.width / 6;
const yOffset = canvas.dimensions.height / 6;

export const scoreCounter1 = new ScoreCounter(
    xOffset1,
    yOffset,
    0
);

export const scoreCounter2 = new ScoreCounter(
    xOffset2,
    yOffset,
    0
);

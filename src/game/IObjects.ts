import {Canvas} from "../gameShapes/Canvas";
import {Axis} from "../gameShapes/Axis";
import {ScoreCounter} from "../gameShapes/ScoreCounter";

export interface IObjects {
    canvas: Canvas;
    axis: Axis;
    scoreCounter1: ScoreCounter;
    scoreCounter2: ScoreCounter;
}

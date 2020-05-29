import {Player} from "../../player/Player";
import {leftNet, rightNet} from "./nets";
import {leftPaddle, rightPaddle} from "./paddles";
import {computerController1, computerController2, controller1, controller2} from "./controllers";
import {scoreCounter1, scoreCounter2} from "./scoreCounters";

export const player1 = new Player(
    leftNet,
    leftPaddle,
    [controller1, computerController1],
    scoreCounter1
);
export const player2 = new Player(
    rightNet,
    rightPaddle,
    [controller2, computerController2],
    scoreCounter2
);

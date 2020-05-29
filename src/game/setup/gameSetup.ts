import {Game} from "../Game";
import {borderColor, bottomBorder, topBorder} from "./borders";
import {axis, backgroundColor, canvas} from "./gameShapes";
import {leftNet, netColor, rightNet} from "./nets";
import {leftPaddle, paddleColor, rightPaddle} from "./paddles";
import {ball, ballColor} from "./ball";
import {collisionDetector, projectionDrawer, relativePositionResolver} from "./services";
import {player1, player2} from "./players";
import {computerController1, computerController2, controller1, controller2} from "./controllers";
import {scoreCounter1, scoreCounter2} from "./scoreCounters";

export const game = new Game(
    {
        topBorder: topBorder,
        bottomBorder: bottomBorder,
        leftNet: leftNet,
        rightNet: rightNet,
        leftPaddle: leftPaddle,
        rightPaddle: rightPaddle,
        ball: ball,
    },
    {
        canvas: canvas,
        axis: axis,
        scoreCounter1: scoreCounter1,
        scoreCounter2: scoreCounter2,
    },
    {
        isProjectionOn: false,
        backgroundColor: backgroundColor,
        borderColor: borderColor,
        netColor: netColor,
        paddleColor: paddleColor,
        ballColor: ballColor,
    },
    {
        projectionDrawer: projectionDrawer,
        collisionDetector: collisionDetector,
        relativePositionResolver: relativePositionResolver,
    },
    {
        player1: player1,
        player2: player2,
    },
    {
        controller1,
        controller2,
        computerController1,
        computerController2,
    },
);

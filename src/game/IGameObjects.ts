import {Border} from "../gameplayObjects/Border";
import {Ball} from "../gameplayObjects/Ball";
import {IShape} from "../shapes/AbstractShape";
import {Net} from "../gameplayObjects/Net";
import {Paddle} from "../gameplayObjects/Paddle";

export interface IGameObjects {
    [key: string]: IShape
    topBorder: Border;
    bottomBorder: Border;
    leftNet: Net;
    rightNet: Net;
    leftPaddle: Paddle;
    rightPaddle: Paddle;
    ball: Ball;
}

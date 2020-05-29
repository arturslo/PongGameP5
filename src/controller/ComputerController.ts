import {Ball} from "../gameplayObjects/Ball";
import {IController} from "./IController";
import {ControlCommandType} from "../command/ControlCommandType";
import {Paddle} from "../gameplayObjects/Paddle";
import {ControllerMapping} from "./ControllerMapping";
import {Utilities} from "../utilities/Utilities";

export class ComputerController implements IController {
    private _controllerMapping: ControllerMapping;
    private _ball: Ball;
    private _paddle: Paddle;

    constructor(controllerMapping: ControllerMapping, ball: Ball, paddle: Paddle) {
        this._controllerMapping = controllerMapping;
        this._ball = ball;
        this._paddle = paddle;
    }

    checkKeyPresses() {
        let commandType: ControlCommandType | null = null;
        const projectionPoints = this._ball.getProjectionPoints();
        Utilities.shuffle(projectionPoints);
        const pointToFollow = projectionPoints[0];

        if (Math.abs(this._paddle.centerPoint.y - pointToFollow.y) < this._ball.radius) {
            commandType = null;
        } else if (this._paddle.centerPoint.y < pointToFollow.y) {
            commandType = ControlCommandType.moveDown;
        } else if (this._paddle.centerPoint.y > pointToFollow.y) {
            commandType = ControlCommandType.moveUp;
        }

        if (commandType === null) {
            return;
        }

        const btnMapping = this._controllerMapping.findByCommandType(commandType);
        if (!btnMapping) {
            return;
        }

        btnMapping.command.execute();
    }
}

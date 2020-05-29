import {IPaddle} from "../gameplayObjects/IPaddle";
import {ControlCommand} from "./ControlCommand";
import {ControlCommandType} from "./ControlCommandType";

export class MoveUpCommand extends ControlCommand{
    private _paddle: IPaddle;

    constructor(paddle: IPaddle) {
        super();
        this._type = ControlCommandType.moveUp;
        this._paddle = paddle;
    }

    execute(): void {
        this._paddle.moveUp();
    }
}

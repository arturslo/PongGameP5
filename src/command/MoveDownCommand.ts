import {IPaddle} from "../gameplayObjects/IPaddle";
import {ControlCommand} from "./ControlCommand";
import {ControlCommandType} from "./ControlCommandType";

export class MoveDownCommand extends ControlCommand{
    private _paddle: IPaddle;

    constructor(paddle: IPaddle) {
        super();
        this._paddle = paddle;
        this._type = ControlCommandType.moveDown;
    }

    execute(): void {
        this._paddle.moveDown();
    }
}

import {ControlCommandType} from "./ControlCommandType";
import {IControlCommand} from "./IControlCommand";

export abstract class ControlCommand implements IControlCommand{
    protected _type: ControlCommandType;

    constructor() {
        this._type = ControlCommandType.none;
    }

    getType() {
        return this._type;
    }

    abstract execute(): void;
}

import {ControlCommand} from "../command/ControlCommand";

export class ButtonMapping {
    private _key: string;
    private _command: ControlCommand;

    constructor(key: string, command: ControlCommand) {
        this._key = key;
        this._command = command;
    }

    get key() {
        return this._key;
    }

    get command() {
        return this._command;
    }
}

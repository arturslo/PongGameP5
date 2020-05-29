import {ButtonMapping} from "./ButtonMapping";
import {ControlCommandType} from "../command/ControlCommandType";

export class ControllerMapping {
    private _buttonMappings: ButtonMapping[];

    constructor(buttonMappings: ButtonMapping[]) {
        this._buttonMappings = buttonMappings;
    }

    get buttonMappings() {
        return this._buttonMappings;
    }

    findByCommandType(type: ControlCommandType) {
        return this._buttonMappings.find((mapping) => {
            return mapping.command.getType() === type;
        })
    }
}

import {IController} from "./IController";
import {ControllerMapping} from "./ControllerMapping";
import {IKeyEventProvider} from "../keyEvent/IKeyEventProvider";

export class Controller implements IController {
    private _controllerMapping: ControllerMapping;
    private _keyEventProvider: IKeyEventProvider;

    constructor(controllerMapping: ControllerMapping, keyEventProvider: IKeyEventProvider) {
        this._controllerMapping = controllerMapping;
        this._keyEventProvider = keyEventProvider;
    }

    get controllerMapping() {
        return this._controllerMapping;
    }

    checkKeyPresses() {
        if (!this._keyEventProvider) {
            return;
        }

        for (const buttonMapping of this._controllerMapping.buttonMappings) {
            if (this._keyEventProvider.keyIsDown(buttonMapping.key)) {
                buttonMapping.command.execute();
            }
        }
    }
}

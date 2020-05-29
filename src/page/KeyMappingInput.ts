import {Controller} from "../controller/Controller";
import {ControlCommandType} from "../command/ControlCommandType";

export class KeyMappingInput {
    private _controller1: Controller;
    private _controller2: Controller;
    private _p1Up: HTMLInputElement;
    private _p1Down: HTMLInputElement;
    private _p2Up: HTMLInputElement;
    private _p2Down: HTMLInputElement;

    constructor(controller1: Controller, controller2: Controller) {
        this._controller1 = controller1;
        this._controller2 = controller2;

        this._p1Up = document.getElementById("p1up") as HTMLInputElement;
        this._p1Down = document.getElementById("p1down") as HTMLInputElement;
        this._p2Up = document.getElementById("p2up") as HTMLInputElement;
        this._p2Down = document.getElementById("p2down") as HTMLInputElement;

        this._p1Up.readOnly = true;
        this._p1Down.readOnly = true;
        this._p2Up.readOnly = true;
        this._p2Down.readOnly = true;

        this._p1Up.value = this._controller1.controllerMapping.findByCommandType(ControlCommandType.moveUp)!.key;
        this._p1Down.value = this._controller1.controllerMapping.findByCommandType(ControlCommandType.moveDown)!.key;
        this._p2Up.value = this._controller2.controllerMapping.findByCommandType(ControlCommandType.moveUp)!.key;
        this._p2Down.value = this._controller2.controllerMapping.findByCommandType(ControlCommandType.moveDown)!.key;
    }
}

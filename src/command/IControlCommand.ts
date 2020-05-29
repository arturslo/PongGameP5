import {ICommand} from "./ICommand";
import {ControlCommandType} from "./ControlCommandType";

export interface IControlCommand extends ICommand{
    getType: () => ControlCommandType;
}

import {Controller} from "../controller/Controller";
import {ComputerController} from "../controller/ComputerController";
import {IController} from "../controller/IController";

export interface IControllers {
    [key: string]: IController
    controller1: Controller;
    controller2: Controller;
    computerController1: ComputerController;
    computerController2: ComputerController;
}

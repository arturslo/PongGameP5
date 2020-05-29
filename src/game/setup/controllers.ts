import {Controller} from "../../controller/Controller";
import {MoveUpCommand} from "../../command/MoveUpCommand";
import {leftPaddle, rightPaddle} from "./paddles";
import {MoveDownCommand} from "../../command/MoveDownCommand";
import {ComputerController} from "../../controller/ComputerController";
import {ball} from "./ball";
import {ControllerMapping} from "../../controller/ControllerMapping";
import {ButtonMapping} from "../../controller/ButtonMapping";
import {KeyEventProvider} from "../../keyEvent/KeyEventProvider";

const moveUpCommand1 = new MoveUpCommand(leftPaddle);
const moveDownCommand1 = new MoveDownCommand(leftPaddle);
const moveUpCommand2 = new MoveUpCommand(rightPaddle);
const moveDownCommand2 = new MoveDownCommand(rightPaddle);

const keyEventProvider = new KeyEventProvider();

export const controller1 = new Controller(
    new ControllerMapping(
        [
            new ButtonMapping("a", moveUpCommand1),
            new ButtonMapping("z", moveDownCommand1),
        ]
    ),
    keyEventProvider
);

export const controller2 = new Controller(
    new ControllerMapping(
        [
            new ButtonMapping("\\", moveUpCommand2),
            new ButtonMapping("/", moveDownCommand2),
        ]
    ),
    keyEventProvider
);

export const computerController1 = new ComputerController(
    new ControllerMapping(
        [
            new ButtonMapping("", moveUpCommand1),
            new ButtonMapping("", moveDownCommand1),
        ]
    ),
    ball,
    rightPaddle
)


export const computerController2 = new ComputerController(
    new ControllerMapping(
        [
            new ButtonMapping("", moveUpCommand2),
            new ButtonMapping("", moveDownCommand2),
        ]
    ),
    ball,
    rightPaddle
)

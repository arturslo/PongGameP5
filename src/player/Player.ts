import {Net} from "../gameplayObjects/Net";
import {Paddle} from "../gameplayObjects/Paddle";
import {ScoreCounter} from "../gameShapes/ScoreCounter";
import {IController} from "../controller/IController";
import {ComputerController} from "../controller/ComputerController";
import {Controller} from "../controller/Controller";

export class Player {
    private _net: Net
    private _score: number;
    private _paddle: Paddle;
    private _controllers: IController[];
    private _scoreCounter: ScoreCounter;
    private _activeController: IController;

    constructor(net: Net, paddle: Paddle, controllers: IController[], scoreCounter: ScoreCounter) {
        this._net = net;
        this._score = 0;
        this._paddle = paddle;
        this._controllers = controllers;
        this._scoreCounter = scoreCounter;
        this._activeController = controllers[0];
    }

    get scoreCounter() {
        return this._scoreCounter;
    }

    get score() {
        return this._score;
    }

    addScore() {
        this._score += 1;
    }

    get activeController() {
        return this._activeController;
    }

    switchToComputerControl() {
        let foundController: ComputerController | null = null;
        for (const controller of this._controllers) {
            if (controller instanceof ComputerController) {
                foundController = controller;
                break;
            }
        }

        if (!foundController) {
            return;
        }

        this._activeController = foundController;
    }

    switchToPlayerControl() {
        let foundController: Controller | null = null;
        for (const controller of this._controllers) {
            if (controller instanceof Controller) {
                foundController = controller;
                break;
            }
        }

        if (!foundController) {
            return;
        }

        this._activeController = foundController;
    }

    ownsObject(object: object) {
        for (const playerObject of Object.values(this)) {
            if (object === playerObject) {
                return true;
            }
        }

        return false;
    }
}

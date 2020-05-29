import {IGameConfig} from "../game/IGameConfig";

export class ConfigInput {
    private _gameConfig: IGameConfig;
    private _projectionControl: HTMLInputElement;

    constructor(gameConfig: IGameConfig) {
        this._gameConfig = gameConfig;
        this._projectionControl = document.getElementById("isProjectionOn") as HTMLInputElement;

        this._projectionControl.addEventListener('click', (event) => {
            if (this._projectionControl.checked) {
                this._gameConfig.isProjectionOn = true;
                return;
            }

            this._gameConfig.isProjectionOn = false;
        });
    }
}

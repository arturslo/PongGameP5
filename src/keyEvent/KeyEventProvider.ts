import {IKeyEventProvider} from "./IKeyEventProvider";

export class KeyEventProvider implements IKeyEventProvider{

    private _downKeys: {
        [key: string]: boolean;
    };

    constructor() {
        this._downKeys = {};
        document.addEventListener('keydown', (event) => {
            this._downKeys[event.key] = true;
        });
        document.addEventListener('keyup', (event) => {
            this._downKeys[event.key] = false;
        });
    }

    keyIsDown(key: string): boolean {
        return this._downKeys[key];
    }
}

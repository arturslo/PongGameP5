import {Player} from "../player/Player";

export class ComputerControlInput {
    private _computerController1: HTMLInputElement;
    private _computerController2: HTMLInputElement;
    private _player1: Player;
    private _player2: Player;


    constructor(player1: Player, player2: Player) {
        this._player1 = player1;
        this._player2 = player2;
        this._computerController1 = document.getElementById("isPlayer1Computer") as HTMLInputElement;
        this._computerController2 = document.getElementById("isPlayer2Computer") as HTMLInputElement;

        this._computerController1.addEventListener('click', (event) => {
            if (this._computerController1.checked) {
                 player1.switchToComputerControl();
                 return;
            }

            player1.switchToPlayerControl();
        });

        this._computerController2.addEventListener('click', (event) => {
            if (this._computerController2.checked) {
                player2.switchToComputerControl();
                return;
            }

            player2.switchToPlayerControl();
        });
    }
}

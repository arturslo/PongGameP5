import {Collision} from "../Collision";
import {ICollisionsListener} from "../ICollisionsListener";
import {IPlayers} from "../../game/IPlayers";
import {Ball} from "../../gameplayObjects/Ball";
import {Net} from "../../gameplayObjects/Net";
import {player1, player2} from "../../game/setup/players";
import {IResettable} from "../../gameplayObjects/IResettable";

export class BallInNetListener implements ICollisionsListener {
    private _players: IPlayers;
    private _resettableObjects: IResettable[];

    constructor(players: IPlayers, resettableObjects: IResettable[]) {
        this._players = players;
        this._resettableObjects = resettableObjects;
    }

    onCollisions(collisions: Collision[]): void {
        let ball: Ball | null = null;
        let net : Net | null = null;

        for (const collision of collisions) {
            if (collision.shapeA instanceof Ball && collision.shapeB instanceof Net) {
                ball = collision.shapeA;
                net = collision.shapeB;
            }
            if (collision.shapeB instanceof Ball && collision.shapeA instanceof Net) {
                ball = collision.shapeB;
                net = collision.shapeA;
            }
        }

        if (ball && net) {
            // add score
            let playerToAddScore = player1;
            if (player1.ownsObject(net)) {
                playerToAddScore = player2;
            }
            playerToAddScore.addScore();
            playerToAddScore.scoreCounter.setScore(playerToAddScore.score);
            // reset shape position
            for (const resettable of this._resettableObjects) {
                resettable.reset();
            }
        }
    }
}
